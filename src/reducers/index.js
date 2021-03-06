import { combineReducers } from 'redux';
import inputValueReducer from './inputValueReducer';
import contentHistoryReducer from './contentHistoryReducer';
import filesReducer from './filesReducer';
import filePathReducer from './filePathReducer';
import toggleWinowReducer from './showWindowReducer'

export default combineReducers({
    inputValue: inputValueReducer,
    contentHistory: contentHistoryReducer,
    files: filesReducer,
    filePath: filePathReducer,
    window: toggleWinowReducer
});