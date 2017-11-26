import * as React from 'react';
import * as ReactDOM from 'react-dom';
/* tslint:disable-next-line:no-unused-variable */
import {Route, Switch, Link, BrowserRouter} from 'react-router-dom';
// 提供antd的本地语言支持
import {Menu} from 'antd';
/* tslint:disable-next-line:no-unused-variable */
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
import {createStore} from 'redux';
import {enthusiasm} from '@src/modules/demo/test-redux/reducers/index';
import {StoreState} from './types/index';
import './index.less';
// import Hello from './containers/Hello';
import {Provider} from 'react-redux';
import Home from './home/Home';

const store = createStore < StoreState > (enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript'
});

// import {maproutes, _routes} from './routes'




console.log(Home);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <Home/>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);

// <Hello />