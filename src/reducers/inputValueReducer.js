/*

'mkdir dir1'

*/

export default (state = '', action) => {
    switch(action.type) {
        case 'CHANGE_INPUT_VALUE': 
            return action.payload
        default: 
            return state
    };
};