export default (state = '', action) => {
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