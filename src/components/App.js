import React from 'react'
import {connect} from 'react-redux'
import uuid from 'uuid'
import {createList, deleteList} from '../api'
import {joinList, navigateToList} from '../actions'

import TodoList from './TodoList'
import AllLists from './AllLists'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            decisionMade: false
        }
    }

    createList(){
        const newListName = prompt('Name for new list')
        createList(newListName)
    }

    joinList(key){
        this.setState({decisionMade: true})
        this.props.joinListDispatch(key)
    }
    
    deleteList(key){
        this.props.deleteList(key)
    }

    render() {
        return (
            <div>
                {
                    this.props.specificList
                    ?
                    <TodoList/>
                    :
                    <AllLists/>
                }
            </div>
        )
    }
}

const mapState = state => {
    return {
        lists: state.lists,
        specificList: (state.list.currentListKey ? true : false)
    }
}

export default connect(mapState)(App)