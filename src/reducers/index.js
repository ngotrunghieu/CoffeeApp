import { combineReducers } from 'redux';

import {LoginReducer} from './LoginReducer';
import {HomeReducer} from './HomeReducer';

const allReducers = combineReducers({
    LoginReducer,
    HomeReducer,
});

export default allReducers;
