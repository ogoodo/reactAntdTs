import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Button } from 'antd';
import One from './One'
//import OneLoad from 'bundle-loader?lazy!./One.jsx'
import Two from '../modules/demo/testRedux/Two'
import LeftNav from './LeftNav'
import TopBar from './TopBar'
import './gobal.css'

//console.log(OneLoad)

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="LeftNav">
          <LeftNav />
        </div>
        <div className="right">
          <TopBar />
          <div>
            <div>main.jsx</div>
            {/* <Route path="/one" component={One}/>
            <Route path="/two" component={Two}/> */}
            {
              this.props.children
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
