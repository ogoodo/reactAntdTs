import { combineReducers } from 'redux';
// import { enthusiasm } from '@modules/demo/test-redux/testRedux.reducer.tsx';
import Demo from '@modules/demo/demo-reducers.tsx';
import { IStoreState } from '@src/types/index';

const rootReducer = combineReducers({
  demo: Demo,
});

export default rootReducer;