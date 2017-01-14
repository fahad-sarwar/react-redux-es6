import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses, // ES6 short-hand property name
    authors,
    ajaxCallsInProgress
});

export default rootReducer;