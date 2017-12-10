import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import TsComponent from './TsComponent';
import StateLess from './Stateless';


export interface DemoTsProps {
  className?: string;
}

export default class DemoTs extends React.Component<DemoTsProps, any> {
  constructor(props: DemoTsProps) {
    super(props);
  }
  render() {
    return (
      <div>
        <TsComponent message="通过props传入的参数" title="通过props传入的title" />
        <br />
        <br />
        <TsComponent message="通过props传入的参数" />
        <br />
        <br />
        <StateLess name="我是姓名" age={18} />
        <StateLess name="我是姓名" />
      </div>
    );
  }
}
