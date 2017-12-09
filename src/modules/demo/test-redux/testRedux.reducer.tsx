import { IStoreState, ITestRedux } from '@src/types/index';
import * as constant from './testRedux.constant';
import { EnthusiasmAction } from './testRedux.action';
import initState from '@src/reducers/initState.tsx';

// const initState = {
//   enthusiasmLevel: 1,
//   languageName: 'TypeScript'
// }

export function enthusiasm(state: ITestRedux = initState.demo.testRedux, action: EnthusiasmAction): ITestRedux {
  console.log('enthusiasm');
  let ret: ITestRedux;
  switch (action.type) {
    case constant.INCREMENT_ENTHUSIASM:
    ret = {...state, enthusiasmLevel: state.enthusiasmLevel + 1};
    break;
    case constant.DECREMENT_ENTHUSIASM:
    ret = {...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    break;
      // return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    default:
    ret = state;
  }
  console.log('enthusiasm', ret, initState);
  return ret;
}
// export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
//   switch (action.type) {
//     case constant.INCREMENT_ENTHUSIASM:
//       const demo = {...state.demo, enthusiasmLevel: state.demo.enthusiasmLevel + 1};
//       return { ...state, demo };
//     case constant.DECREMENT_ENTHUSIASM:
//       const demo2 = {...state.demo, enthusiasmLevel:Math.max(1, state.demo.enthusiasmLevel - 1) };
//       return { ...state, demo: demo2 };
//       // return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
//   }
//   return state;
// }
