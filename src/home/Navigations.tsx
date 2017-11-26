import * as React from 'react';
import {Route, Switch, Link, BrowserRouter} from 'react-router-dom';

import { _routes} from './routes'
import {Menu} from 'antd';
/* tslint:disable-next-line:no-unused-variable */
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;


const renderSubMenu = (routes) => {
    return routes.map((route) => {
      return (
        <MenuItem key={`route-${route.path}`}>
          <Link to={route.path} key={`route-link-${route.path}`}>
            {route.name}
          </Link>
        </MenuItem>
      )
    })
  }

class Navigations extends React.Component {
    render() {
      return (
        <Menu style={{ width: 200}} mode="inline">
          {
            _routes.map(routes => {
              return (
                <SubMenu key={routes.id} title={routes.name}>
                  {
                    renderSubMenu(routes.routes)
                  }
                </SubMenu>
              )
            })
          }
        </Menu>
      )
    }
  }

export default Navigations;
