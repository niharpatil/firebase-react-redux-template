import React from 'react'
import {connect} from 'react-redux'
import uuid from 'uuid/v4'
import {loadList, createList, deleteList} from '../actions'
import api from '../api'

class AllLists extends React.Component {
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
                                    <span onClick={()=>{this.props.viewSpecificListDispatch(list.key)}}>{list.name}</span>
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
        lists: state.lists
    }
}

const mapDispatchToProps = dispatch => {
    return {
        viewSpecificListDispatch: (key) => {dispatch(loadList(key))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllLists)