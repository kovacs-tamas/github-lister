import {combineReducers} from 'redux';
import ReposReducer from './reducer_repos';

const rootReducer = combineReducers({
    repos: ReposReducer
});

export default rootReducer;
