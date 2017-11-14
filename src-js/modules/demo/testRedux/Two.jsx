import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Button} from 'antd'


import * as global from '../../../actions/global'
import * as testAction from './testAction'

// @connect(
//     state => ({...state.home}),
//     dispatch => bindActionCreators({...home, ...global}, dispatch)
// )
// let Two = () => (
//     <div>
//         <h2>我是第二页</h2>
//         <Button onClick={() => alert('click')}> 点击 </Button>
//     </div>
// )

class TestRedux extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      employeeId: '',
    };
  }

  onAddClick = () => {
      console.log('onAddClick')
    this.props.actionAdd(1);
  }
  onDesClick = () => {
    this.props.actionDes(1);
  }

  render() {
    console.warn('this.props', this.props);
    return (
        <div>
            <h2>我是第二页</h2>
            <Button onClick={this.onAddClick}> add </Button>
            <span>{this.props.reducer.reducerNumber}</span>
            <Button onClick={this.onDesClick}> des </Button>
        </div>
    )
  }

}

TestRedux = connect(
    state => {
        console.log('state:', state);
        return {reducer: { reducerNumber: state.testReducer.number}}
    },
    // state => ({...state.home}),
    dispatch => bindActionCreators({...global, ...testAction}, dispatch)
)(TestRedux)
export default TestRedux
