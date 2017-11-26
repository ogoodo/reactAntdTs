import * as React from 'react';
import styled from 'styled-components';
/* tslint:disable-next-line:no-unused-variable */
import {Route, Switch, Link, BrowserRouter} from 'react-router-dom';


import Navigations from './Navigations';
import Header from './Header';
import ToolBar from './ToolBar';
import FooterBar from './FooterBar';
import Content from './Content';

const DivRoot = styled.div`
  display: flex;
  flex-direction: column;
//   align-items: stretch;
  height: 100%;
`
const Main = styled.div`
display: flex;
align-items: stretch;
flex-grow: 1;
background: #9ae;
`
const DivMenu = styled.div`
background: bisque;
color: brown;
`
const DivRight = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
background: #eee;
color: brown;
`
// const Home = () => (
//     <DivRoot>
//         <Header />
//         <Main>
//             <DivMenu>
//                 <Navigations />
//             </DivMenu>
//             <DivRight>
//                 <ToolBar />
//                 <Content />
//                 <FooterBar />
//             </DivRight>
//         </Main>
//     </DivRoot>
// )
const Home = () => (
    <DivRoot>
        <Main>
            <DivMenu>
                <Navigations />
            </DivMenu>
            <DivRight>
                <Header />
                <ToolBar />
                <Content />
                <FooterBar />
            </DivRight>
        </Main>
    </DivRoot>
)

export default Home;