
import {createStore} from 'redux';
import reducers from '../reducers/index';
import {IStoreState} from '@src/types/index';
import initState from './initState';

export default function () {
    const store = createStore(reducers, initState);
    return store;
}


// const store2 = createStore < StoreState > (enthusiasm, {
//   demo: {
//     enthusiasmLevel: 1,
//     languageName: 'TypeScript'
//   }
// });
