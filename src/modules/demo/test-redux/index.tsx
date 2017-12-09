import TestRedux from './TestRedux';
import * as actions from './testRedux.action';
import { IStoreState, IDemo } from '@src/types/index';
import { connect, Dispatch } from 'react-redux';

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export function mapStateToProps({ demo }: IStoreState) {
  // console.log(`enthusiasmLevel: ${enthusiasmLevel}, languageName: ${languageName}`);
  return {
    enthusiasmLevel: demo.enthusiasmLevel,
    name: demo.languageName,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(TestRedux);
