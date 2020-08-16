// input value action creator
export const changeInputValue = (value) => {
    return {
        type: 'CHANGE_INPUT_VALUE',
        payload: value
    };
};

//
export const updateContentHistory = (input, output) => {
    return {
        type: 'UPDATE_CONTENT_HISTORY',
        payload: {input, output}
    }
}