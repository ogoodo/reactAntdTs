import React from 'react'
import { Route, Link } from 'react-router-dom'


const One = () => (
    <div>
        <h2>首页</h2>
    </div>
)

const Two = () => (
    <div>
        <h2>我是第二页</h2>
    </div>
)

const Lists = ({ match }) => (
    <div>
        <h3>{match.params.ListsId}</h3>
    </div>
)

 
const List = ({ match }) => (
    <div>
        <h2>我是一个列表</h2>
        <ul>
            <li>
                <Link to={`${match.url}/我是第一个哈哈`}>
                    列表下边的第一个
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/我是第二个呵呵`}>
                    列表下边的第二个
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/我是第三个嘿嘿`}>
                    列表下边的第三个
                </Link>
            </li>
        </ul>
        <Route path={`${match.url}/:ListsId`} component={Lists}/>
        <Route exact path={match.url} render={() => (
            <h3>点击上边的列表项此处显示与url地址一样的...</h3>
        )}/>
    </div>
)

const routeConfig = 
    { path: '/',
      component: One,
    //   indexRoute: { component: Lists },
      childRoutes: [
        { path: 'two', component: Two },
        // { path: 'about', component: One },
        // { path: 'inbox',
        //   component: Two,
        //   childRoutes: [
        //     { path: '/messages/:id', component: Lists },
        //     { path: 'messages/:id',
        //       onEnter: function (nextState, replaceState) {
        //         replaceState(null, '/messages/' + nextState.params.id)
        //       }
        //     }
        //   ]
        // }
      ]
    }


export default routeConfig;