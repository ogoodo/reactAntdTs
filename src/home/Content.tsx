import * as React from 'react';
import {Route, Switch, Link, BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';


import Demo from '@modules/demo/Demo';

import NotFoundView from '@components/notFoundView/NotFoundView';

const ContentDiv = styled.div`
flex-grow: 1;
background: #eae;
overflow: auto;
`

class Content extends React.Component {
    render() {
      return (
        <ContentDiv>
            <Switch>
                <Route path="/demo" component={Demo} />
                <Route component={NotFoundView}/>
            </Switch>
        </ContentDiv>
      )
    }
  }

export default Content;
