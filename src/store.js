import {createStore, combineReducers} from 'redux'

const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_ITEMS':
            return action.items
        default:
            return state
    }
}

const loginReducer = (state = false, action) => {
  switch(action.type){
    case 'LOGIN':
      return true
    default:
      return state
  }
}

const mainReducer = combineReducers({
  items: itemsReducer,
  loggedIn: loginReducer
})

const store = createStore(mainReducer)

export default store