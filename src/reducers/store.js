import { createStore, combineReducers } from 'redux';
import user from './userReducer/userReducer';
import realtime from './realtimeReducer/realtimeReducer';

const reducer = combineReducers({
  user,
  realtime
});

export default createStore(reducer);