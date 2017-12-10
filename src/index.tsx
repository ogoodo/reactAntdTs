import * as React from 'react';
import * as ReactDOM from 'react-dom';
/* tslint:disable-next-line:no-unused-variable */
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import './index.less';
import { Provider } from 'react-redux';
import Home from './home/Home';
import store from './reducers/configureStore';

ReactDOM.render(
  <Provider store={store()}>
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
