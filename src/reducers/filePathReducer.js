/*

{
    currentPath: '/'
}

*/

export default (state = '/home/name', action) => {
    switch (action.type) {
        case 'CHANGE_FILE_PATH':
            return action.payload
        default:
            return state;
    }
}