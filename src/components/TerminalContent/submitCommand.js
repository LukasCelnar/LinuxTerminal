import React from 'react';
import _ from 'lodash'
import { 
    updateContentHistory, 
    createFile, 
    changeFilePath, 
    clearContentHistory,
    removeFile,
    changeFile 
} from '../../actions';

export default (inputValue) => {
    let values = inputValue.split(" ");
    const valuesWithoutSpaces = values.filter(value => value !== '')
    let sudo = false

    if (values[0] === 'sudo') {
        values = values.slice(1)
        sudo = true
    }

    return (dispatch, getState) => {

        const throwError = () => dispatch(updateContentHistory(inputValue, `${inputValue}: command not found`));
        const doNothing = () => dispatch(updateContentHistory(inputValue, null));
        const showOutput = (output) => dispatch(updateContentHistory(inputValue, output));

        const getDir = name => _.find(getState().files, { name: name, type: 'directory', path: getState().filePath });
        const getFile = name => _.find(getState().files, { name: name, type: 'file', path: getState().filePath });
        const getDirFile = name => _.find(getState().files, { name: name, path: getState().filePath });

        switch (values[0]) {
            case 'mkdir':
                if (values.length === 2 && values[1]) {

                    // checks if this file/directory already exists
                    if (!getFile(values[1]) && !getDir(values[1])) {
                        dispatch(createFile(values[1], getState().filePath, 'directory', 'rgb(121, 199, 248)'));
                        doNothing();
                        break;
                    }
                    
                    showOutput(`cannot create directory '${values[1]}': file/directory with this name already exists`)
                    break
                };
                throwError();
                break;
            case 'touch':
                if (values.length === 2 && values[1]) {

                    // checks if this file already exists
                    if (!getFile(values[1]) && !getDir(values[1])) {
                        dispatch(createFile(values[1], getState().filePath, 'file', '#fff'));
                        doNothing();
                        break;
                    }

                    // this error isnt shown in ubuntu
                    showOutput(`cannot create file '${values[1]}': file/directory with this name already exists`)
                    break
                };
                throwError()
                break;
            case 'ls':
                if (values.length === 1) {

                    // loop through all the existing files and return those that are in this directory path
                    const files = getState().files.map((file, index) => {
                        if (file.path === getState().filePath) {
                            return <div key={index} style={{color: file.color}}>{file.name}&nbsp;&nbsp;&nbsp;&nbsp;</div>;
                        }
                        return null;
                    })
                    showOutput(files);
                    break;
                };
                throwError();
                break;
            case 'pwd':
                if (values.length === 1) {
                    showOutput(getState().filePath)
                    break
                }
                throwError()
                break
            case 'cd':
                if (values.length === 2 && values[1]) {
                    // if user enter "cd .."
                    if (values[1] === '..') {
                        // if user is in '/some-dir' it will change filePath state to '/'
                        if ((getState().filePath.split('/').length === 2)) {
                            dispatch(changeFilePath('/'));
                            doNothing();
                            break
                        }
                        // else it will remove last route and then join rest with '/'
                        dispatch(changeFilePath(getState().filePath.split('/').slice(0, -1).join('/')));
                        doNothing();
                        break
                    }

                    // removes '/' if it is in the end of second argument so it wont output error in next if statement
                    if (values[1][values[1].length - 1] === '/') {
                        values[1] = values[1].slice(0, -1)
                    }

                    // check if there is '/' in second argument
                    if (values[1].includes('/')) {
                        throwError();
                        break;
                    }

                    // checks if this directory with this name, current filepath and type of 'directory' exists if so, this returns true
                    const dirExists = Boolean(_.find(getState().files, { name: values[1], type: 'directory', path: getState().filePath }))

                    // if entered directory doesnt exists, it will throw an error
                    if (!dirExists) {
                        showOutput('directory doesnt exist');
                        break;
                    }

                    // triggers when you are in root dir and you want to cd to something
                    if (getState().filePath === '/') {

                        // change current path to '/' + second argument
                        dispatch(changeFilePath(`/${values[1]}`));
                        doNothing();
                        break;
                    }

                    // change current path to current path + '/' + second argument
                    dispatch(changeFilePath(`${getState().filePath}/${values[1]}`));
                    doNothing();
                    break;
                }
                throwError()
                break
            case 'clear':
                if (values.length === 1) {
                    dispatch(clearContentHistory());
                    break;
                }
                throwError()
                break
            case 'rmdir':

                // maps through all inputed values
                const rmdirOutput = values.map((value, index) => {
                    // ignores 'rmdir' value
                    if (value === 'rmdir') { return null }

                    // gets directory by name
                    const currentDir = getDir(value)

                    // true if getDir returned something which means that dir exists
                    if (currentDir) {

                        // isEmpty is true if direcotry is empty and false if it is not
                        let isEmpty = true

                        // loops through every file that exists
                        getState().files.map(file => {
                            // checks if file contains path to directory that we are trying to delete
                            if ((file.path.includes(`${currentDir.path}/${value}`)) || (getState().filePath === '/' && file.path.includes(`/${value}`))) {
                                isEmpty = false
                            }
                            return null
                        })

                        // is directory is empty its gonna delete that directory
                        if (isEmpty) {
                            dispatch(removeFile(currentDir))
                            return null
                        }
                        
                        // else its gonna return error that directory isnt empty
                        return <React.Fragment key={index}><div>failed to remove '{value}', directory isnt empty</div><br /></React.Fragment>                        
                    }

                    // else its gonna return error that directory doesnt exists
                    return <React.Fragment key={index}><div>rmdir: failed to remove '{value}' no such directory`</div><br /></React.Fragment>
                })

                // outputs returned items
                showOutput(rmdirOutput)
                break

            //    
            case 'rm':

                // true if second value has -r in it
                if (values[1] === '-r') {

                    // maps through all inputed values
                    const rmrOutput = values.map((value, index) => {
                        // ignores 'rm' and '-r' values
                        if (value === 'rm' || value === '-r') { return null };
    
                        // gets dir/file by its name
                        const currentDirFile = getDirFile(value);
    
                        // true if getDirFile returned something which means that dir exists
                        if (currentDirFile) {

                            // removes that file/dir no matter if its empty or not
                            dispatch(removeFile(currentDirFile));
                            
                            // maps through every file that exists
                            getState().files.map(file => {
                                // checks if file contains path to the directory that we are trying to delete
                                // if so, it is gonna delete that file
                                // basicly this deletes all the files/dirs in the deleted directory
                                if ((file.path.includes(`${currentDirFile.path}/${value}`)) || (getState().filePath === '/' && file.path.includes(`/${value}`))) {
                                    dispatch(removeFile(file));
                                };
                                return null;
                            });
                            return null;
                        };
                        // if getDirFile returns undefined (file/dir doesnt exist), its gonna ouput error that this file or directory doesnt exists
                        return <React.Fragment key={index}><div>rm: failed to remove '{value}' no such file or directory`</div><br /></React.Fragment>;
                    });
    
                    // outputs returned items
                    showOutput(rmrOutput);
                    break;
                };

                // maps through all inputed values
                const rmOutput = values.map((value, index) => {
                    // ignores 'rm' value
                    if (value === 'rm') { return null };

                    // gets file by its name
                    const currentFile = getFile(value);

                    // true if currentFile contains object and not undefined
                    if (currentFile) {
                        dispatch(removeFile(currentFile));
                        return null;
                    }

                    // else it outputs error that file doesnt exist
                    return <React.Fragment key={index}><div>rm: failed to remove '{value}' no such file`</div><br /></React.Fragment>;
                });

                // outputs returned items
                showOutput(rmOutput)
                break
            case 'unlink':       
                if (values.length === 2) {
                    // true if getFile retuned object and not undefined
                    if (getFile(values[1])) {
                        // removes that file
                        dispatch(removeFile(getFile(values[1])));
                        // doesnt show any output
                        doNothing();
                        break;
                    };
                    // else outputs that file doesnt exists
                    showOutput('this file doesnt exist');
                    break;
                };
                // outputs that user is trying to delete more then one file which he cant with 'unlink'
                showOutput('you can only delete one file');
                break;
            case 'mv':
                if (values.length === 3) {
                    // if user entered file path with '/' on the end of that string, its gonna be deleted
                    if (values[2].slice(-1) === '/') { values[2] = values[2].slice(0, -1) }

                    // gets dir/file
                    const dirFile = getDirFile(values[1])

                    // gets destination directory and stores it in desPath variable
                    const desDir = values[2].split('/').slice(-1)[0];
                    let desPath = values[2].split('/').slice(0, -1).join('/');
                    if (getState().filePath === '/') {
                        desPath = '/' + desPath;
                    } else {
                        desPath = getState().filePath + '/' + desPath;
                    }

                    // checks if destination path is valid path
                    if (values[2].includes("/") && !_.find(getState().files, { name: desDir, path: desPath, type: 'directory' })) {
                        showOutput('this destination folder doesnt exist');
                        break
                    } else if (!values[2].includes("/") && !_.find(getState().files, { name: values[2], path: getState().filePath, type: 'directory' })) {
                        showOutput('this destination folder doesnt exist');
                        break
                    };
                    
                    // true if dirFile returned object and not undefined
                    if (dirFile) {

                        // true if user is trying to move something from root path
                        if (getState().filePath === '/') {

                            // checks if file/dir with this name already exists in path that we are trying to move our files/dirs to, if so it is going to delete that old dir/file
                            if (_.find(getState().files, { name: dirFile.name, path: '/' + values[2], type: dirFile.type })) {
                                dispatch(removeFile(_.find(getState().files, { name: dirFile.name, path: '/' + values[2], type: dirFile.type })));

                                // true if we are trying to delete dir with lines of code above
                                if (dirFile.type === 'directory') {
                                    // deletes all the files/dirs that were stored in overwrited dir
                                    getState().files.map(file => {
                                        if (file.path.includes('/' + values[2] + '/' + dirFile.name)) {
                                            dispatch(removeFile(_.find(getState().files, { name: file.name, path: file.path, type: file.type })));
                                        }
                                        return null
                                    })
                                }
                            };
                            // changes file path (moves that file)
                            dispatch(changeFile(dirFile, { name: dirFile.name, type: dirFile.type, path: '/' + values[2], color: dirFile.color }));
                            // loops through every file and changes path to files/dirs that live inside a dir that has been moved with "mv"
                            getState().files.map(file => {
                                if (file.path.includes('/' + dirFile.name)) {
                                    const newPath = '/' + values[2] + file.path

                                    // checks if dir/file that we are trying to move already lives in that new path, if so its gonna delete that dir/file
                                    if (_.find(getState().files, { name: file.name, path: newPath, type: file.type })) {
                                        dispatch(removeFile(_.find(getState().files, { name: file.name, path: newPath, type: file.type })));
                                    };
                                    dispatch(changeFile(file, { name: file.name, type: file.type, path: newPath, color: file.color }));
                                }
                                return null;
                            })

                        // true if user is trying to move something that doesnt live in root route
                        } else {

                            // checks if file/dir with this name already exists in path that we are trying to move our files/dirs to, if so it is going to delete that old dir/file
                            if (_.find(getState().files, { name: dirFile.name, path: dirFile.path + '/' + values[2], type: dirFile.type })) {
                                dispatch(removeFile(_.find(getState().files, { name: dirFile.name, path: dirFile.path + '/' + values[2], type: dirFile.type })));

                                // true if we are trying to delete dir with lines of code above
                                if (dirFile.type === 'directory') {
                                    // deletes all the files/dirs that were stored in overwrited dir
                                    getState().files.map(file => {
                                        if (file.path.includes(dirFile.path + '/' + values[2] + '/' + dirFile.name)) {
                                            dispatch(removeFile(_.find(getState().files, { name: file.name, path: file.path, type: file.type })));
                                        }
                                        return null
                                    })
                                }
                            };
                            // changes file path (moves that file)
                            dispatch(changeFile(dirFile, { name: dirFile.name, type: dirFile.type, path: dirFile.path + '/' + values[2], color: dirFile.color }));
                            // loops through every file and changes path to files/dirs that live inside a dir that has been moved with "mv"
                            getState().files.map(file => {
                                if (file.path.includes(dirFile.path + '/' + dirFile.name)) {
                                    const newPath = dirFile.path + '/' + values[2] + file.path.replace(dirFile.path, '')

                                    // checks if dir/file that we are trying to move already lives in that new path, if so its gonna delete that dir/file
                                    if (_.find(getState().files, { name: file.name, path: newPath, type: file.type })) {
                                        dispatch(removeFile(_.find(getState().files, { name: file.name, path: newPath, type: file.type })));

                                        // true if we are trying to delete dir with lines of code above
                                        if (dirFile.type === 'directory') {
                                            // deletes all the files/dirs that were stored in overwrited dir
                                            if (file.path.includes(dirFile.path + '/' + dirFile.name + file.name)) {
                                                dispatch(removeFile(_.find(getState().files, { name: file.name, path: file.path, type: file.type })));
                                            }
                                        }
                                    };
                                    dispatch(changeFile(file, { name: file.name, type: file.type, path: newPath, color: file.color }));
                                }
                                return null;
                            })
                        }

                        // if everything goes well, function bellow will be called and user shouldnt see an output
                        doNothing();
                        break;
                    };

                    // else output that file or dir doesnt exist
                    showOutput(`file or directory ${values[1]} doesnt exist`);
                    break;
                }

                throwError();
                break;
            case 'cp':
                if (values.length === 4) {
                    if (values[1] === '-r') {
                        // if user entered file path with '/' on the end of that string, its gonna be deleted
                        if (values[3].slice(-1) === '/') { values[3] = values[3].slice(0, -1) };

                        // gets dir/file, (in this file stands for both file and directory)
                        const dirFile = getDirFile(values[2]);

                        // gets destination directory and stores it in desPath variable
                        const desDir = values[3].split('/').slice(-1)[0];
                        let desPath = values[3].split('/').slice(0, -1).join('/');
                        if (getState().filePath === '/') {
                            desPath = '/' + desPath;
                        } else {
                            desPath = getState().filePath + '/' + desPath;
                        }

                        // checks if destination path is valid path
                        if (values[3].includes("/") && !_.find(getState().files, { name: desDir, path: desPath, type: 'directory' })) {
                            showOutput('this destination folder doesnt exist');
                            break;
                        } else if (!values[3].includes("/") && !_.find(getState().files, { name: values[3], path: getState().filePath, type: 'directory' })) {
                            showOutput('this destination folder doesnt exist');
                            break;
                        };

                        // true if dirFile returned object and not undefined
                        if (dirFile) {

                            // true if user is trying to copy something from root path
                            if (getState().filePath === '/') {

                                // checks if file/dir with this name already exists in path that we are trying to copy our files/dirs to, if so it is going to delete that old file
                                if (_.find(getState().files, { name: dirFile.name, path: '/' + values[3] })) {
                                    dispatch(removeFile(_.find(getState().files, { name: dirFile.name, path: '/' + values[3] })));

                                    // true if we are trying to delete dir with lines of code above
                                    if (dirFile.type === 'directory') {
                                        // deletes all the files/dirs that were stored in overwrited dir
                                        getState().files.map(file => {
                                            if (file.path.includes('/' + values[3] + '/' + dirFile.name)) {
                                                dispatch(removeFile(_.find(getState().files, { name: file.name, path: file.path, type: file.type })));
                                            }
                                            return null
                                        })
                                    }
                                };
                                // creates (copies) new file/dir in selected path
                                dispatch(createFile(dirFile.name, '/' + values[3], dirFile.type, dirFile.color ));

                                // loops through every file and changes path to files/dirs that live inside a dir that has been created (copied)
                                getState().files.map(file => {
                                    const newPath = '/' + values[3] + file.path;
                                    if (file.path.includes('/' + dirFile.name)) {
                                        // checks if dir/file that we are trying to create (copy) already lives in that new path, if so its gonna delete that dir/file
                                        if (_.find(getState().files, { name: file.name, path: newPath, type: file.type })) {
                                            dispatch(removeFile(_.find(getState().files, { name: file.name, path: newPath, type: file.type })));
                                        };
                                        dispatch(createFile( file.name, newPath, file.type, file.color ));
                                    };

                                    return null;
                                });

                            // true if user is trying to copy something that doesnt live in root route
                            } else {

                                // checks if file/dir with this name already exists in path that we are trying to copy our files/dirs to, if so it is going to delete that old file
                                if (_.find(getState().files, { name: dirFile.name, path: dirFile.path + '/' + values[3] })) {
                                    dispatch(removeFile(_.find(getState().files, { name: dirFile.name, path: dirFile.path + '/' + values[3] })));

                                    // true if we are trying to delete dir with lines of code above
                                    if (dirFile.type === 'directory') {
                                        // deletes all the files/dirs that were stored in overwrited dir
                                        getState().files.map(file => {
                                            if (file.path.includes(dirFile.path + '/' + values[3] + '/' + dirFile.name)) {
                                                dispatch(removeFile(_.find(getState().files, { name: file.name, path: file.path, type: file.type })));
                                            }
                                            return null
                                        })
                                    }
                                };
                                // creates (copies) new file/dir in selected path
                                dispatch(createFile( dirFile.name, dirFile.path + '/' + values[3], dirFile.type, dirFile.color ));

                                // loops through every file and changes path to files/dirs that live inside a dir that has been created (copied)
                                getState().files.map(file => {
                                    const newPath = dirFile.path + '/' + values[3] + file.path.replace(dirFile.path, '');
                                    if (file.path.includes(dirFile.path + '/' + dirFile.name)) {
                                        // checks if dir/file that we are trying to create (copy) already lives in that new path, if so its gonna delete that dir/file
                                        if (_.find(getState().files, { name: file.name, path: newPath, type: file.type })) {
                                            dispatch(removeFile(_.find(getState().files, { name: file.name, path: newPath, type: file.type })));
                                        };
                                        dispatch(createFile(file.name, newPath, file.type, file.color));
                                    };

                                    return null;
                                });
                            };

                            // if everything goes well, function bellow will be called and user shouldnt see an output
                            doNothing();
                            break;
                        };
                    };
                };

                // normal copy (cp) command
                if (values.length === 3) {
                    // if user entered file path with '/' on the end of that string, its gonna be deleted
                    if (values[2].slice(-1) === '/') { values[2] = values[2].slice(0, -1) }

                    // gets file
                    const dirFile = getFile(values[1])

                    // gets destination directory and stores it in desPath variable
                    const desDir = values[2].split('/').slice(-1)[0];
                    let desPath = values[2].split('/').slice(0, -1).join('/');
                    if (getState().filePath === '/') {
                        desPath = '/' + desPath;
                    } else {
                        desPath = getState().filePath + '/' + desPath;
                    }

                    // checks if destination path is valid path
                    if (values[2].includes("/") && !_.find(getState().files, { name: desDir, path: desPath, type: 'directory' })) {
                        showOutput('this destination folder doesnt exist');
                        break
                    } else if (!values[2].includes("/") && !_.find(getState().files, { name: values[2], path: getState().filePath, type: 'directory' })) {
                        showOutput('this destination folder doesnt exist');
                        break
                    };
                    
                    // true if dirFile returned object and not undefined
                    if (dirFile) {

                        // true if user is trying to copy something from root path
                        if (getState().filePath === '/') {
                            const newPath = '/' + values[2]
                            // checks if file with this name already exists in path that we are trying to copy our file to, if so it is going to delete that old file
                            if (_.find(getState().files, { name: dirFile.name, path: newPath, type: 'file' })) {
                                dispatch(removeFile(_.find(getState().files, { name: dirFile.name, path: newPath, type: 'file' })))
                            }
                            // creates (copies) new file in selected path
                            dispatch(createFile(dirFile.name, newPath, 'file', '#fff'))
                        
                            // with cp user can only copy files so we dont need to check for files/dirs inside that

                        // true if user is trying to copy something that doesnt live in root route
                        } else {
                            const newPath = dirFile.path + '/' + values[2]
                            // checks if file with this name already exists in path that we are trying to copy our file to, if so it is going to delete that old file
                            if (_.find(getState().files, { name: dirFile.name, path: newPath, type: 'file' })) {
                                dispatch(removeFile(_.find(getState().files, { name: dirFile.name, path: newPath, type: 'file' })))
                            }
                            // creates (copies) new file in selected path
                            dispatch(createFile(dirFile.name, newPath, 'file', '#fff'))

                            // with cp user can only copy files so we dont need to check for files/dirs inside that
                        }

                        // if everything goes well, function bellow will be called and user shouldnt see an output
                        doNothing();
                        break;
                    };

                    // else output that file or dir doesnt exist
                    showOutput(`file ${values[1]} doesnt exist`);
                    break;
                }

                throwError();
                break;
            case 'whoami':
                // true if user used sudo command
                if (sudo) {
                    showOutput('root')
                    break
                }
                showOutput('name')
                break
            default:
                // check if user entered white space/s
                if (!valuesWithoutSpaces.length) {
                    doNothing();
                    break;
                };
                throwError();
        };
    };
};