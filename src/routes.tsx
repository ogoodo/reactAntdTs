/**
 * 路由写到此处 页面一般会有层级关系 此处json对象是按照业务写成层级关系
 * 第一种做法是 处理成 平级的路由
 * 第二种是 根据业务的层级关系渲染出符合业务的相应导航
 * 此处两种都导出 然后在index.tsx中可以两种都试一下
 */

import {RouteProps} from 'react-router-dom'

import Apple from './modules/demo/test-router/components/fruits/Apple'
import Banana from './modules/demo/test-router/components/fruits/banana'

import Cabbage from './modules/demo/test-router/components/vegetables/cabbage'
import Radish from './modules/demo/test-router/components/vegetables/radish'

import Hello from './modules/demo/test-redux/containers/Hello';
// import Hello from './components/Hello';

interface PowerRouteProps extends RouteProps{
    name:string;
}

export const _routes=[
    {
        id:'hello',
        name:'测试',
        routes:[
            {
                name:'hi',
                path:'/hello2',
                component: Hello
            },
            {
                name:'香蕉',
                path:'/banana',
                component:Banana
            },
            // {
            //     name:'香蕉',
            //     path:'/banana',
            //     component:Banana
            // }
        ]
    },
    {
        id:'fruits',
        name:'水果',
        routes:[
            {
                name:'苹果',
                path:'/apple',
                component:Apple
            },
            // {
            //     name:'香蕉',
            //     path:'/banana',
            //     component:Banana
            // }
        ]
    },
    {
        id:'vegetables',
        name:'蔬菜',
        routes:[
            {
                name:'白菜',
                path:'/cabbage',
                component:Cabbage
            },
            // {
            //     name:'萝卜',
            //     path:'/radish',
            //     component:Radish
            // }
        ]
    }
];
// 此处变量我之前使用 routes 命名 结果在index.tsx引入时(import {routes} from './routes') 直接报错
// 注意导出变量名和文件名不能一样
export const maproutes = _routes.reduce((ary:PowerRouteProps[],cur:any)=>{
    return ary.concat(cur.routes||cur)
},[]).filter(x=>x.path && x.path!=='');
