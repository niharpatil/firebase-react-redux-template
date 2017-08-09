import listReducer from './list'
import listsReducer from './lists'

import {combineReducers} from 'redux'

export default combineReducers({
    list: listReducer,
    lists: listsReducer,
})