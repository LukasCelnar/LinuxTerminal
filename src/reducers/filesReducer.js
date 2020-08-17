/*

[
    {
        name: 'dir1'
        type: 'directory'
        color: 'rgb(121, 199, 248)'
    }
]

*/

export default (state = [], action) => {

    switch(action.type) {
        case 'CREATE_FILE':
            return [ ...state, action.payload ];
        default:
            return state;
    };
};