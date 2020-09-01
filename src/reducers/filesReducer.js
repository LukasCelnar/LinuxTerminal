import _ from 'lodash';
import defaultFiles from './defaultFiles'

/*

[
    {
        name: 'dir1'
        type: 'directory'
        color: 'rgb(121, 199, 248)'
    }
]

*/

export default (state = defaultFiles, action) => {

    switch(action.type) {
        case 'CREATE_FILE':
            return [ ...state, action.payload ];
        case 'REMOVE_FILE':
            return _.reject(state, action.payload);
        case 'CHANGE_FILE':
            return [ ..._.reject(state, action.payload.from), action.payload.to ];
        default:
            return state;
    };
};