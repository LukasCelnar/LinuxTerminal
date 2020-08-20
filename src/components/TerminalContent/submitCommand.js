import React from 'react';
import _ from 'lodash'
import { 
    updateContentHistory, 
    createFile, 
    changeFilePath, 
    clearContentHistory,
    removeFile 
} from '../../actions';

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

                    // checks if this directory already exists
                    if (!_.find(getState().files, { name: values[1], type: 'directory', path: getState().filePath })) {
                        dispatch(createFile(values[1], getState().filePath, 'directory', 'rgb(121, 199, 248)'));
                        doNothing();
                        break;
                    }
                    
                    showOutput('directory with this name already exists')
                    break
                };
                throwError();
                break;
            case 'touch':
                if (values.length === 2 && values[1]) {

                    // checks if this file already exists
                    if (!_.find(getState().files, { name: values[1], type: 'file', path: getState().filePath })) {
                        dispatch(createFile(values[1], getState().filePath, 'file', '#fff'));
                        doNothing();
                        break;
                    }

                    showOutput('file with this name already exists')
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
                const getFile = name => _.find(getState().files, { name: name, type: 'directory', path: getState().filePath })

                const idk = values.map((value, index) => {
                    if (value === 'rmdir') {
                        return null
                    }

                    const currentFile = getFile(value)

                    if (currentFile) {

                        dispatch(removeFile(currentFile))

                        getState().files.map(file => {
                            if ((file.path.includes(`${currentFile.path}/${value}`)) || (getState().filePath === '/' && file.path.includes(`/${value}`))) {
                                dispatch(removeFile(file))
                            }
                            return null
                        })

                        return null
                        
                    }
                    return <React.Fragment key={index}><div>rmdir: failed to remove '{value}' no such file or directory`</div><br /></React.Fragment>
                    
                })

                showOutput(idk)

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