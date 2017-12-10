import React, {Component} from 'react'
import StudentForm from './StudentForm'
import {putStudentEdits} from '../reducers/studentReducer'
import store from '../store'

export default class EditStudentForm extends Component {
    constructor(){
        super()
        this.cancel = this.cancel.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    cancel(){
        this.props.history.push('/students')
    }

    handleSubmit(evt){
        const editedStudent = {
            firstName: evt.target.firstName.value,
            lastName: evt.target.lastName.value,
            email: evt.target.email.value,
            gpa: evt.target.gpa.value
        }
        store.dispatch(putStudentEdits(this.props.studentId, editedStudent))
    }

    render(){
        return <StudentForm handleSubmit={this.handleSubmit} cancel={this.cancel}/>
    }
}