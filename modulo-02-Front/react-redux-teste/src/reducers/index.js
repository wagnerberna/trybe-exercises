import { combineReducers } from 'redux';
import loginReducer from './login';
import registerReducer from './registers';

const rootReducers = combineReducers({ registerReducer, loginReducer });

export default rootReducers;