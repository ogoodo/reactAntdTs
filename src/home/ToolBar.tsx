import * as React from 'react';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

const ToolBarDiv = styled.div`
height: 40px;
background: #aaa;
`;

class ToolBar extends React.Component {
  render() {
    return (
      <ToolBarDiv>
          ToolBar
      </ToolBarDiv>
    );
  }
}

export default ToolBar;
