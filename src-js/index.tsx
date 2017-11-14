import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Main from './components/Main';
// import Three from './components/Three';
import registerServiceWorker from './registerServiceWorker';
// import routeConfig from './routes/route';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import { createStore, combineReducers } from 'redux'
// import { createStore, applyMiddleware, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
// import * as thunk from 'redux-thunk'
import { Provider } from 'react-redux'
// import createHistory from 'history/createHashHistory'
import rootReducer from './reducers/index'
// const history = createHistory()

// const middlewares = [thunk]

// const store = createStore(
//     // combineReducers({routing: routerReducer, ...rootReducer}),
//     composeWithDevTools(applyMiddleware(...middlewares))
// )

// const store = createStore(
//     rootReducer,
//     applyMiddleware(...middlewares) // 中间件
//   );

// const store = createStore(
//     combineReducers({routing: routerReducer, ...rootReducer})
//     , applyMiddleware(thunk));
    const store = createStore(
        combineReducers({routing: routerReducer, ...rootReducer})
    , {});

//  history={history}
ReactDOM.render(
    <Provider store={store}>
        <HashRouter basename="/hi" >
            <div>hi</div>
        </HashRouter>
    </Provider>
    , document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
