import * as React from 'react';
import * as ReactDOM from 'react-dom';
/* tslint:disable-next-line:no-unused-variable */
import {Route, Switch, Link, BrowserRouter} from 'react-router-dom';
// import {createStore} from 'redux';
// import {enthusiasm} from '@src/modules/demo/test-redux/testRedux.reducer.tsx';
// import {IStoreState} from '@src/types/index';
import './index.less';
import {Provider} from 'react-redux';
import Home from './home/Home';
import store from './reducers/configureStore';

// const store2 = createStore < StoreState > (enthusiasm, {
//   demo: {
//     enthusiasmLevel: 1,
//     languageName: 'TypeScript'
//   }
// });

// import {maproutes, _routes} from './routes'




console.log(Home);
ReactDOM.render(
  <Provider store={store()}>
    <BrowserRouter>
        <Home/>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);

// <Hello />
/*
file: 'file:///Users/chen/github/reactAntdTs/src/index.tsx'
severity: '错误'
message: '不能将类型“{ store: () => Store<IStoreState>; children: Element; }
”分配给类型“IntrinsicAttributes & IntrinsicClassAttributes<Provider> & Readonly<{ children?: ReactNode; }> & ...”。

不能将类型“{ store: () => Store<IStoreState>; children: Element; }”分配给类型“Readonly<ProviderProps>”。
    属性“store”的类型不兼容。
      不能将类型“() => Store<IStoreState>”分配给类型“Store<any> | undefined”。
        不能将类型“() => Store<IStoreState>”分配给类型“Store<any>”。'
at: '27,13'
source: 'ts'
code: '2322'

*/
