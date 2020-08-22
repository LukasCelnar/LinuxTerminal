// input value action creator
export const changeInputValue = (value) => {
    return {
        type: 'CHANGE_INPUT_VALUE',
        payload: value
    };
};

export const updateContentHistory = (input, output) => {
    return {
        type: 'UPDATE_CONTENT_HISTORY',
        payload: {input, output}
    };
};

export const clearContentHistory = () => {
    return {
        type: 'CLEAR_CONTENT_HISTORY'
    }
}

// files = directories/files
export const createFile = (name, path, type, color) => {
    return {
        type: 'CREATE_FILE',
        payload: { name, type, color, path }
    };
};

export const removeFile = (file) => {
    return {
        type: 'REMOVE_FILE',
        payload: file
    };
};

export const changeFile = (from, to) => {
    return {
        type: 'CHANGE_FILE',
        payload: { from, to }
    }
}

export const changeFilePath = (path) => {
    return {
        type: 'CHANGE_FILE_PATH',
        payload: path
    }
}