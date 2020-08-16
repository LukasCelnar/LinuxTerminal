import { combineReducers } from 'redux';
import inputValueReducer from './inputValueReducer';
import contentHistoryReducer from './contentHistoryReducer';

export default combineReducers({
    inputValue: inputValueReducer,
    contentHistory: contentHistoryReducer
});