import ReactDOM from 'react-dom'
import React from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import App from './components/App'
import {setupFirebaseListeners} from './firebaseWatcher'
import reducer from './reducers/reducer'

const store = createStore(reducer,applyMiddleware(thunk))

setupFirebaseListeners(store.dispatch)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)