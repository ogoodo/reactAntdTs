import { combineReducers } from 'redux';
import { enthusiasm } from '@modules/demo/test-redux/testRedux.reducer.tsx';
import { IStoreState } from '@src/types/index';

const rootReducer = combineReducers({
  demo: enthusiasm,
});

export default rootReducer;