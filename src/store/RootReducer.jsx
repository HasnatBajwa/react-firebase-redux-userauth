import {combineReducers} from 'redux';
import AuthReducer from './Reducers/AuthReducer';
export  const RootReducer = combineReducers(
    {
        AuthReducer
    }
    );