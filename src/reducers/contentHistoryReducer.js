/*

[
    {
        input: 'pwd',
        output: '/home/name'
    }
]

*/

export default (state = [], action) => {
    switch(action.type) {
        case 'UPDATE_CONTENT_HISTORY':
            return [ ...state, action.payload ]
        case 'CLEAR_CONTENT_HISTORY':
            return []
        default:
            return state
    }
}