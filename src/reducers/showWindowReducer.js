/*

'terminal'

*/

export default (state = 'help', action) => {
    switch (action.type) {
        case 'SHOW_WINDOW':
            if (action.payload === state) {
                return ''
            }
            return action.payload;
        default:
            return state;
    }
}