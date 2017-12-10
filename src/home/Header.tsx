import * as React from 'react';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

const HeaderDiv = styled.div`
background: #666;
height: 40px;
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderDiv>
          Header
      </HeaderDiv>
    );
  }
}

export default Header;
