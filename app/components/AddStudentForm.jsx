import React, {Component} from 'react'
import {postNewStudent}  from '../reducers/studentReducer'
import store from '../store'

export default class AddStudentform extends Component {
    constructor(){
        super()
        this.cancel = this.cancel.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    cancel(){
        this.props.history.push('/students')
    }

    handleSubmit(evt){
        evt.preventDefault()
        const newStudent = {
            firstName: evt.target.firstName.value,
            lastName: evt.target.lastName.value,
            email: evt.target.email.value,
            gpa: evt.target.gpa.value
        }
        store.dispatch(postNewStudent(newStudent))
    }

    render(){
        return (
            
                <form onSubmit={this.handleSubmit}>
                    <label>First Name:</label>
                    <input name="firstName" />
                    <label>Last Name:</label>
                    <input name="lastName" />
                    <label>Email: </label>
                    <input name="email" />
                    <label>GPA: </label>
                    <input name="gpa" type="number" />
                    <button type="submit">SUBMIT</button>
                    <button onClick={this.cancel}>CANCEL</button>
                </form>
                
            
        )
    }
}