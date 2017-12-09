import { combineReducers } from 'redux';
import { enthusiasm } from './test-redux/testRedux.reducer';

const rootReducer = combineReducers({
  testRedux: enthusiasm,
});

export default rootReducer;