import React from 'react'
import uuid from 'uuid'
import {connect} from 'react-redux'
import api from '../api'

class TodoList extends React.Component {
    addItem(){
        const todo = this.refs.newItemField.value
        this.refs.newItemField.value = ""
        api.addItem(this.props.listKey, todo)
    }
    render() {
        return (
            <div>
                <h4>{this.props.listname}</h4>
                Item: <input type="text" ref="newItemField"/>
                <button onClick={() => {this.addItem()}}>Add</button>
                <ul>
                    {this.props.items
                    .map((item) => {
                        return <li key={uuid()} onClick={()=>{this.changeTodo(item.key)}}>{item.todo}</li>
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listname: state.list.list.name,
        items: state.list.list.items,
        listKey: state.list.currentListKey
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //add item functionality here
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)