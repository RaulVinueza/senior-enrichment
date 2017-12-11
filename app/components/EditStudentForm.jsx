import React, {Component} from 'react'
import StudentForm from './StudentForm'
import {putStudentEdits} from '../reducers/studentReducer'
import store from '../store'
import {connect} from 'react-redux'

class EditStudentForm extends Component {
    constructor(){
        super()
        this.cancel = this.cancel.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    cancel(){
        this.props.history.goBack()
    }

    handleSubmit(evt){
        const editedStudent = {
            firstName: evt.target.firstName.value,
            lastName: evt.target.lastName.value,
            email: evt.target.email.value,
            gpa: evt.target.gpa.value,
            campusId: +evt.target.campus.value
        }
        store.dispatch(putStudentEdits(this.props.studentId, editedStudent, this.cancel))
    }

    render(){
        return <StudentForm handleSubmit={this.handleSubmit} cancel={this.cancel} campuses={this.props.campuses} student={this.props.student} />
    }
}
const mapState = (state, ownProps) => ({
    campuses: state.campuses,
    student: state.students.find(student => student.id === ownProps.studentId)
})
export default connect(mapState)(EditStudentForm)