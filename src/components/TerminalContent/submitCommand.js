import { createFile } from '../../actions';

export default (inputValue) => {
    const values = inputValue.split(" ");

    return (dispatch) => {
        
        switch (values[0]) {
            case 'mkdir':
                if (values.length === 2) {
                    dispatch(createFile(values[1], 'directory', 'rgb(121, 199, 248)'));
                };
                break;
            case 'touch':
                if (values.length === 2) {
                    dispatch(createFile(values[1], 'file', '#fff'));
                };
                break;
            default:
                break;
        };

    };
};

