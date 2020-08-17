import React from 'react';
import { updateContentHistory, createFile } from '../../actions';

export default (inputValue) => {
    const values = inputValue.split(" ");

    return (dispatch, getState) => {

        //const throwError = () => dispatch(updateContentHistory(inputValue, `${inputValue}: command not found`));
        
        switch (values[0]) {
            case 'mkdir':
                if (values.length === 2) {
                    dispatch(createFile(values[1], 'directory', 'rgb(121, 199, 248)'));
                    dispatch(updateContentHistory(inputValue, null));
                    break
                };
                dispatch(updateContentHistory(inputValue, `${inputValue}: command not found`));
                break;
            case 'touch':
                if (values.length === 2) {
                    dispatch(createFile(values[1], 'file', '#fff'));
                    dispatch(updateContentHistory(inputValue, null));
                    break
                };
                dispatch(updateContentHistory(inputValue, `${inputValue}: command not found`));
                break;
            case 'ls':
                if (values.length === 1) {
                    const files = getState().files.map((file, index) => {
                        return <div key={index} style={{color: file.color}}>{file.name}&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    })
                    dispatch(updateContentHistory(inputValue, files));
                    break
                };
                dispatch(updateContentHistory(inputValue, `${inputValue}: command not found`));
                break
            default:
                dispatch(updateContentHistory(inputValue, `${inputValue}: command not found`));
        };
    };
};

