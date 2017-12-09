import { combineReducers } from 'redux';
import { enthusiasm } from './test-redux/testRedux.reducer';

const json = {
  testRedux: enthusiasm,
}
console.log(json);
const rootReducer = combineReducers(json);

export default rootReducer;