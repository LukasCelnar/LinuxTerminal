import { combineReducers } from 'redux';
import inputValueReducer from './inputValueReducer';
import contentHistoryReducer from './contentHistoryReducer';
import filesReducer from './filesReducer'

export default combineReducers({
    inputValue: inputValueReducer,
    contentHistory: contentHistoryReducer,
    // files represents all the files and directories
    files: filesReducer
});