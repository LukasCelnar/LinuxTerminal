import React from 'react';
import { updateContentHistory, createFile, changeFilePath } from '../../actions';

export default (inputValue) => {
    const values = inputValue.split(" ");
    const valuesWithoutSpaces = values.filter(value => value !== '')

    return (dispatch, getState) => {

        const throwError = () => dispatch(updateContentHistory(inputValue, `${inputValue}: command not found`));
        const doNothing = () => dispatch(updateContentHistory(inputValue, null));
        const showOutput = (output) => dispatch(updateContentHistory(inputValue, output));
        
        switch (values[0]) {
            case 'mkdir':
                if (values.length === 2 && values[1]) {
                    dispatch(createFile(values[1], getState().filePath, 'directory', 'rgb(121, 199, 248)'));
                    doNothing();
                    break;
                };
                throwError();
                break;
            case 'touch':
                if (values.length === 2 && values[1]) {
                    dispatch(createFile(values[1], getState().filePath, 'file', '#fff'));
                    doNothing();
                    break;
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
                        throwError()
                        break
                    }

                    
                    // loops through every file and checks if the name of the file is same as given name
                    // also it checks if the file path of that file is same as current filepath and
                    // if the type of that file is 'directory' and not 'file' if all these return true
                    // it will set dirExists to true and then continue to the directory
                    let dirExists = false
                    for (let i = 0; i < getState().files.length; i++) {
                        const file = getState().files[i]
                        if (file.name === values[1] && file.path === getState().filePath && file.type === 'directory') {
                            dirExists = true
                            break
                        }
                    }

                    // triggers when you are in root dir and you want to cd to something
                    if (getState().filePath === '/') {

                        // if directory exists, it will continue to that directory
                        if (dirExists) {
                            // change current path to '/' + second argument
                            dispatch(changeFilePath(`/${values[1]}`))
                            doNothing()
                            break
                        }

                        // runs this code if directory doesnt exist
                        showOutput('directory doesnt exist')
                        break
                    }

                    // if directory exists, it will continue to that directory
                    if (dirExists) {
                        // change current path to current path + '/' + second argument
                        dispatch(changeFilePath(`${getState().filePath}/${values[1]}`))
                        doNothing()
                        break
                    }

                    // runs this code if directory doesnt exist
                    showOutput('directory doesnt exist')
                    break
                }
                throwError()
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

