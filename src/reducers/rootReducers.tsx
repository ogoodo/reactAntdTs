import { combineReducers } from 'redux';
// import { enthusiasm } from '@modules/demo/test-redux/testRedux.reducer.tsx';
import Demo from '@modules/demo/demo-reducers.tsx';
import { IStoreState } from '@src/types/index';

const json = {
  demo: Demo,
}
console.log(json);
const rootReducer = combineReducers(json);

export default rootReducer;