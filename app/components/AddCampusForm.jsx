import React, {Component} from 'react'
import {postNewCampus} from '../reducers/campusReducer'
import store from '../store'

export default class AddCampusForm extends Component {
    constructor(){
        super()
        this.cancel = this.cancel.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    cancel(){
        this.props.history.push('/home')
    }

    handleSubmit(evt){
        evt.preventDefault()
        const newCampus = {
            name: evt.target.name.value,
            imgUrl: evt.target.imgUrl.value,
            description: evt.target.description.value
        }
        store.dispatch(postNewCampus(newCampus))
    }

    render(){
        return (
            
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input name="name" />
                    <label>Image URL:</label>
                    <input name="imgUrl" />
                    <label>Description:</label>
                    <textarea name="description" />
                    <button type="submit" >SUBMIT</button>
                    <button onClick={this.cancel}>CANCEL</button>
                </form>
                
           
        )
    }
}