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
        case 'ENTER_COMMAND':
            const values = action.payload.split(" ")
            
            switch(values[0]) {
                case 'mkdir':
                    if (values.length === 2) {
                        return [ ...state, { name: values[0], type: 'directory', color: 'rgb(121, 199, 248)'} ]
                    }
                    return state
                default:
                    return state
            }

        default:
            return state;
    }
}