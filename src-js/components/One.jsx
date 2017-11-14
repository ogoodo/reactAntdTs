import React from 'react';
import {Route} from 'react-router-dom';
import OneA from './OneA'
import OneB from './OneB'

const One = ({match}) => (
    <div>
        <h2>首页</h2>
        <Route path="/one/onea" component={OneA}/>
        <Route path={`${match.url}/oneb`} component={OneB}/>
    </div>
)

export default One

