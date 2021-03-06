import * as React from 'react';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import TestRedux from '@modules/demo/test-redux/index.tsx';
import Apple from '@modules/demo/test-router/components/fruits/Apple';
import Banana from '@modules/demo/test-router/components/fruits/banana';
import Cabbage from '@modules/demo/test-router/components/vegetables/cabbage';
import TestAntd from '@modules/demo/test-antd/TestAntd';
import CssModule from '@modules/demo/css-module/CssModule';
import DemoTs from '@modules/demo/demo-ts/DemoTs';
import Radish from '@modules/demo/test-router/components/vegetables/radish';
import TestHeight from '@modules/demo/test-height/TestHeight';
import NotFoundView from '@components/notFoundView/NotFoundView';

const ContentDiv = styled.div`
flex-grow: 1;
background: #eae;
overflow: auto;
`;
export interface DemoProps {
  match: any;
  params: any;
}

class Demo extends React.Component<DemoProps, any> {

  render() {
    const { match, params, ...rest } = this.props;
    return (
      <Switch>
        <Route path={`${match.path}/test-antd`} exact={true} component={TestAntd} />
        <Route path={`${match.path}/test-redux`} exact={true} component={TestRedux} />
        <Route path={`${match.path}/css-module`} exact={true} component={CssModule} />
        <Route path={`${match.path}/demo-ts`} exact={true} component={DemoTs} />
        <Route path={`${match.path}/test-height`} exact={true} component={TestHeight} />
        <Route path={`${match.path}/apple`} exact={true} component={Apple} />
        <Route path={`${match.path}/banana`} exact={true} component={Banana} />
        <Route path={`${match.path}/cabbage`} exact={true} component={Cabbage} />
        <Route path={`${match.path}/radish`} exact={true} component={Radish} />
        <Route component={NotFoundView}/>
      </Switch>
    );
  }
}

export default Demo;
