import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export interface TsComponentProps {
  type?: 'success' | 'info' | 'warning' | 'error';
  title?: string;
  message: React.ReactNode;
  className?: string;
}

export interface TsComponentState {
  isClick: boolean;
  showContent: string;
}

export interface TsComponentContext {
  antAnchor: any;
}

export default class TsComponent extends React.Component<TsComponentProps, TsComponentState> {
  static defaultProps = {
    type: 'success',
    message: '默认的props.message',
    title: '默认的props.title',
    className: '',
  };

  static contextTypes = {
    antAnchor: PropTypes.object,
  };

  static childContextTypes = {
    antAnchor: PropTypes.object,
  };

  context: TsComponentContext = {
    antAnchor: '',
  };

  getChildContext() {
    return {
      antAnchor: '我是antAnchor',
    };
  }

  state: TsComponentState = {
    isClick: false,
    showContent: '没有点击',
  };

  constructor(props: TsComponentProps) {
    super(props);
  }

  componentWillReceiveProps(nextProps: TsComponentProps) {
  }

  shouldComponentUpdate(nextProps: TsComponentProps, nextState: TsComponentState) {
    return true;
  }

  onClick = () => {
    this.setState({
      isClick: !this.state.isClick,
      showContent: this.state.isClick ? '没有点击' : '点击了'});
    console.log(this.state);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h2>
        demo ts
        </h2>
        <div>
          传入的porps.message: {this.props.message}
        </div>
        <div>
          传入的porps.title: {this.props.title}
        </div>
        <button onClick={this.onClick}>
          你点我看下
        </button>
        <div>
          this.state.isClick: {this.state.isClick ? 'true' : 'false'}
        </div>
        <div>
          this.state.showContent: {this.state.showContent}
        </div>
      </div>
    );
  }
}
