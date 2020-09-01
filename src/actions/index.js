// changes input value in terminal
export const changeInputValue = (value) => {
    return {
        type: 'CHANGE_INPUT_VALUE',
        payload: value
    };
};

// update content history in terminal
export const updateContentHistory = (input, output) => {
    return {
        type: 'UPDATE_CONTENT_HISTORY',
        payload: {input, output}
    };
};

// clear that already existing history
export const clearContentHistory = () => {
    return {
        type: 'CLEAR_CONTENT_HISTORY'
    }
}

// creates directories/files
export const createFile = (name, path, type, color) => {
    return {
        type: 'CREATE_FILE',
        payload: { name, type, color, path }
    };
};

// removes file
export const removeFile = (file) => {
    return {
        type: 'REMOVE_FILE',
        payload: file
    };
};

// changes file
export const changeFile = (from, to) => {
    return {
        type: 'CHANGE_FILE',
        payload: { from, to }
    }
}

// changes file path
export const changeFilePath = (path) => {
    return {
        type: 'CHANGE_FILE_PATH',
        payload: path
    }
}

// shows different window
export const showWindow = (window) => {
    return {
        type: 'SHOW_WINDOW',
        payload: window
    }
}