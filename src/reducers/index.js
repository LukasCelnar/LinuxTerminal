import { combineReducers } from 'redux';
import inputValueReducer from './inputValueReducer';
import contentHistoryReducer from './contentHistoryReducer';
import enterCommandReducer from './enterCommandReducer'

export default combineReducers({
    inputValue: inputValueReducer,
    contentHistory: contentHistoryReducer,
    // disk represents all the files and directories
    disk: enterCommandReducer
});