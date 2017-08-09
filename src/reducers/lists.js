export default (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_LISTS':
            return action.lists
        default:
            return state.slice()
    }
}