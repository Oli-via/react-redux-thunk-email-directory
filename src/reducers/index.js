import { combineReducers } from 'redux';
import usersReducer from './users_reducer'

const rootReducer = combineReducers({
  // state: (state = {}) => state   //初始化写法
  users: usersReducer
});

export default rootReducer;