import { RouteProps } from 'react-router-dom';

// interface PowerRouteProps extends RouteProps{
//     name:string;
// }

export const _routes = [
    {
        id: 'hello',
        name: '测试',
        routes: [
            { name: '测试Redux', path: '/demo/test-redux' },
            { name: '测试高度', path: '/demo/testHeight' },
        ]
    },
    {
        id: 'fruits',
        name: '水果',
        routes: [
            { name: '苹果', path: '/demo/apple' },
            { name: '香蕉', path: '/demo/banana' }
        ]
    },
    {
        id: 'vegetables',
        name: '蔬菜',
        routes: [
            { name: '白菜', path: '/demo/cabbage' },
            { name: '萝卜', path: '/demo/radish' }
        ]
    },
];

// // 此处变量我之前使用 routes 命名 结果在index.tsx引入时(import {routes} from './routes') 直接报错
// // 注意导出变量名和文件名不能一样
// export const maproutes = _routes.reduce((ary: PowerRouteProps[], cur: any) => {
//     return ary.concat(cur.routes || cur)
// }, []).filter( x => x.path && x.path !== '');
