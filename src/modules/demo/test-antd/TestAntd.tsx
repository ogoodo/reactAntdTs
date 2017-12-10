import React, { Component } from 'react';
import { Button } from 'antd';
// import { fetchEx } from '@common/utils/fetchEx.js';

class TestAntd extends Component {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
    };
  }

  onAddClick = () => {
    // tslint-disable-next-line
    console.log('click');
  }

  render() {
    console.warn('this.props', this.props);
    return (
      <div>
        <h2>我是第3页</h2>
        <Button onClick={this.onAddClick}> add </Button>
      </div>
    );
  }
}

export default TestAntd;
