import React from 'react'
import {connect} from 'react-redux'
import api from './api'

class App extends React.Component {
    //be able to render list with delete button next to items
    //have a button to create new lists
    constructor(props){
        super(props)
        this.state = {
            register: true
        }
    }
    addItem(){
        const newItemName = prompt('Enter name for new item:')
        api.createItem(newItemName)
    }
    updateItem(itemKey){
        const newItemName = prompt("Enter name to update item:")
        api.updateItem(itemKey,newItemName)
    }
    deleteItem(itemKey){
        api.deleteItem(itemKey)
    }
    login(){
        const email = this.refs.email.value
        const password = this.refs.password.value
        api.login(email, password)
    }
    register(){
        const email = this.refs.email.value
        const password = this.refs.password.value
        api.register(email, password)
    }
    render(){
        return(
            <div>
            {
                this.props.loggedIn
                ?
                <div>
                    {
                        this.props.items.map(item => {
                            return (
                            <li key={item.key}>
                                <span onClick={()=>{
                                    this.updateItem(item.key)
                                }}>{item.name}</span>
                                <button onClick={() => {
                                    this.deleteItem(item.key)
                                }}>X</button>
                            </li>
                            )
                        })
                    }
                    <button onClick={this.addItem}>Add Item</button>
                </div>
                :
                <div>
                    <button onClick={()=>{
                        this.setState({register: !this.state.register})
                    }}>
                    {this.state.register ? 'Register' : 'Login'}
                    </button>
                    <br/>
                    <input type="text" ref="email"/>
                    <input type="password" ref="password"/>
                    <br/>
                    <button onClick={()=>{
                        if(this.state.register){
                            this.register()
                        }else{
                            this.login()
                        }
                    }}>Submit</button>
                </div>
            }
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.items,
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps)(App)



