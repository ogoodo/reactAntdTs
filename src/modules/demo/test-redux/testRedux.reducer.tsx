import { IStoreState, IDemo } from '@src/types/index';
import * as constant from './testRedux.constant';
import { EnthusiasmAction } from './testRedux.action';
import initState from '@src/reducers/initState.jsx';

// const initState = {
//   enthusiasmLevel: 1,
//   languageName: 'TypeScript'
// }

export function enthusiasm(state: IDemo = initState.demo, action: EnthusiasmAction): IDemo {
  switch (action.type) {
    case constant.INCREMENT_ENTHUSIASM:
      return {...state, enthusiasmLevel: state.enthusiasmLevel + 1};
    case constant.DECREMENT_ENTHUSIASM:
      return {...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
      // return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    default:
      return state;
  }
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
