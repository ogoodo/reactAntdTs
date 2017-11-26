import * as React from 'react';
import {Route, Switch, Link, BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';


import Hello from '@modules/demo/test-redux/index.tsx';

import Apple from '@modules/demo/test-router/components/fruits/Apple';
import Banana from '@modules/demo/test-router/components/fruits/banana';

import Cabbage from '@modules/demo/test-router/components/vegetables/cabbage';
import Radish from '@modules/demo/test-router/components/vegetables/radish';

import TestHeight from '@modules/demo/test-height/TestHeight';

import NotFoundView from '@components/notFoundView/NotFoundView';

const ContentDiv = styled.div`
flex-grow: 1;
background: #eae;
overflow: auto;
`
export interface DemoProps {
    match: any;
    params: any;
}

class Demo extends React.Component<DemoProps, any> {

    render() {
      const { match, params, ...rest } = this.props;
      return (
        <Switch>
            <Route path={`${match.path}/hello2`} exact component={Hello} />
            <Route path={`${match.path}/apple`} exact component={Apple} />
            <Route path={`${match.path}/banana`} exact component={Banana} />
            <Route path={`${match.path}/cabbage`} exact component={Cabbage} />
            <Route path={`${match.path}/radish`} exact component={Radish} />
            <Route path={`${match.path}/testHeight`} exact component={TestHeight} />
            <Route component={NotFoundView}/>
        </Switch>
      )
    }
  }

export default Demo;
