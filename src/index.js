import ReactDOM from 'react-dom'
import React from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import App from './App'
import watcher from './firebaseWatcher'

//import store

//setup firebase listeners

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)