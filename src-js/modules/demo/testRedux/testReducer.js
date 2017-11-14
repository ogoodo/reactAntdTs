/**
 * Created by Administrator on 2016/7/2.
 */
// 初始化状态
let init = {
    number: 0,
}

export function testReducer(state = init, action) {
    console.log(`testReducer: ${state}, ${action}`);
    switch (action.type) {
        case 'ACTION_ADD':
            console.log(`ACTION_ADD:`, state, action);
            return {
                ...state,   //三个点是展开符
                number: state.number + action.data,
                navMain: action.navMain
            }
        case 'ACTION_DES':
            console.log(`ACTION_DES:`, state, action);
            return {
                ...state,
                number: state.number - action.data,
                bookDetails: action.bookDetails
            }
        default:
            return {...state};
    }
}