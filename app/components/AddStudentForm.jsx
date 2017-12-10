import React, {Component} from 'react'
import {postNewStudent}  from '../reducers/studentReducer'
import store from '../store'
import StudentForm from './StudentForm'

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
        const newStudent = {
            firstName: evt.target.firstName.value,
            lastName: evt.target.lastName.value,
            email: evt.target.email.value,
            gpa: evt.target.gpa.value
        }
        store.dispatch(postNewStudent(newStudent))
    }

    render(){
        return <StudentForm handleSubmit={this.handleSubmit} cancel={this.cancel}/>
    }
}