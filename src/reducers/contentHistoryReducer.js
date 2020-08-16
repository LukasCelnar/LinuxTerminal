/*

content history state design
[
    {
        input: '',
        output: ''
    }
]

*/

export default (state = [], action) => {
    switch(action.type) {
        case 'UPDATE_CONTENT_HISTORY':
            return [ ...state, action.payload ]
        default:
            return state
    }
}