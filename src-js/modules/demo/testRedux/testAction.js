

// export function removePage() {
//     return (dispatch, getState) => {
//       return dispatch({
//         [PubSymbol.REMOVE_PAGE]: true, // 有这个标记会清除页面在redux里的数据
//         pageName,
//         type: `${pageName}>${constants.removePage}`,
//       });
//     }
//   }


export function actionAdd(data) {
    return (dispatch, getState) => {
        console.log('actionAdd', data)
        return dispatch({
            type: 'ACTION_ADD',
            data,
            value: 3,
        })
    }
}

export const actionDes = (data) => async (dispatch, getState) => {
    await dispatch({
        type: 'ACTION_DES',
        data,
    })
}

