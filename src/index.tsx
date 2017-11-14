import * as React from 'react';
import * as ReactDOM from 'react-dom';
/* tslint:disable-next-line:no-unused-variable */
import { Route, Switch, Link, BrowserRouter} from 'react-router-dom';
// 提供antd的本地语言支持
import { Menu} from 'antd';
/* tslint:disable-next-line:no-unused-variable */
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
import { createStore } from 'redux';
import { enthusiasm } from './modules/demo/test-redux/reducers/index';
import { StoreState } from './types/index';
// import Hello from './containers/Hello';
import { Provider } from 'react-redux';

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

import {maproutes, _routes} from './routes'

class Navigations extends React.Component {
    render() {
        return (
            <Menu style={{width:200}} mode="inline">
                {_routes.map(routes=>{
                    return (
                    <SubMenu key={routes.id} title={routes.name}>
                        {
                            routes.routes.map((route) => {
                                return (
                                    <MenuItem key={`route-${route.path}`}>
                                        <Link to={route.path} key={`route-link-${route.path}`}>{route.name}</Link>
                                    </MenuItem>
                                )
                            })
                        }
                    </SubMenu>)
                })}
            </Menu>
        )
    }
}

class NotFoundView extends React.Component {
    render() {
        return (
            <div className="http-404">
                <h2 className="text-info">功能尚未开发完毕</h2>
                <h3 className="text-danger">Page not found</h3>
            </div>
        );
    }
}

const Router = () => (
    <BrowserRouter>
        <Switch>
            {maproutes.map(route => {
                // return <Route path={route.path} key={`route-path-${route.path}`} location={route.location} component={route.component}/>
                return <Route path={route.path} key={`route-${route.path}`} component={route.component}/>
            })}
            <Route path="/" exact component={Navigations}/>
            <Route component={NotFoundView}/>
        </Switch>
    </BrowserRouter>
)

console.log(Router);
ReactDOM.render(
    <Provider store={store}>
        <Router/>
    </Provider>, document.getElementById('root'));

// <Hello />
