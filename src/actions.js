import api from './api'

export function getAllLists(lists){
    return dispatch => {
        dispatch({
            type: 'GET_ALL_LISTS',
            lists
        })
    }
}

export function loadList(key){
    return dispatch => {
        api.getListData(key)
        .then((list) => {
            dispatch({
                type: 'GET_LIST',
                list,
                listKey: list.key
            })
        })
    }
}

export function viewSpecificList(){
    return dispatch => {
        dispatch({
            type: 'VIEW_SPECIFIC_LIST'
        })
    }
}