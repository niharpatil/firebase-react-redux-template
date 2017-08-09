export default (state = {list:{}, currentListKey:''}, action) => {
    const newState = Object.assign({}, state)
    switch (action.type) {
        case 'GET_LIST':
            if(!newState.currentListKey || (newState.currentListKey == action.listKey)){
                newState.list = action.list
                newState.currentListKey = action.listKey
            }
            return newState
        default:
            return newState
    }
}