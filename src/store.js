import {createStore} from 'redux'

const reducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_ITEMS':
            return action.items
        default:
            return state
    }
}

const store = createStore(reducer)

export default store