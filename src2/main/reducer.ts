
import { combineReducers } from 'redux';

import todos from '../todos/reducer';

console.log('todos:', todos);
const rootReducer = combineReducers({
  todos
});

export default rootReducer;