import { createStore, combineReducers } from 'redux';
import user from './userReducer/userReducer';

const reducer = combineReducers({
  user
});

export default createStore(reducer);