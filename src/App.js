import React from 'react'
import {connect} from 'react-redux'
import uuid from 'uuid/v4'
import {loadList, createList, deleteList} from './actions'
import api from './api'

class App extends React.Component {
    createList(){
        const newListName = prompt('Name for new list')
        api.createList(newListName)
    }
    render(){
        return(
            <div>
                <ul>
                    {
                        this.props.lists.map(list => {
                            return (
                                <li key={uuid()}>
                                    <span>{list.name}</span>
                                    <button onClick={()=>{api.deleteList(list.key)}}>X</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={this.createList}>Create New List</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lists: state
    }
}

export default connect(mapStateToProps)(App)