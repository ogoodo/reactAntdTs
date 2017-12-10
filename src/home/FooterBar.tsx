import * as React from 'react';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

const FooterBarDiv = styled.div`
height: 40px;
background: #eee;
`;

class FooterBar extends React.Component {
    render() {
      return (
        <FooterBarDiv>
            FooterBar
        </FooterBarDiv>
      );
    }
  }

export default FooterBar;
