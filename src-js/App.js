import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
// import Button from 'antd/lib/button';
import { Button } from 'antd';
// import logo from './logo.svg';
import './App.css';
import RouterList from './routes/test.jsx';
// import 'antd/dist/antd.css';


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
    <div className="App">
      <Button type="primary">Button</Button>
      {/* <RouterList /> */}
    <div>
    <Button type="primary" shape="circle" icon="search" />
    <Button type="primary" icon="search">Search</Button>
    <Button shape="circle" icon="search" />
    <Button icon="search">Search</Button>
    <br />
    <Button shape="circle" icon="search" />
    <Button icon="search">Search</Button>
    <Button type="dashed" shape="circle" icon="search" />
    <Button type="dashed" icon="search">Search</Button>
  </div>,
      </div>
    );
  }
}

export default App;
