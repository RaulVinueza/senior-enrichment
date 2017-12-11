import React, {Component} from 'react'
import {connect} from 'react-redux'

class Student extends Component {
    constructor(){
        super()
        this.returnToPrevious = this.returnToPrevious.bind(this)
        this.renderEditForm = this.renderEditForm.bind(this)
    }

    returnToPrevious(){
        this.props.history.goBack()
    }

    renderEditForm(){
        this.props.history.push(`/edit/student/${this.props.student.id}`)
    }

    render(){
        const student = this.props.student || {}
        const studentCampus = this.props.campuses.find(campus => campus.id === student.campusId) || {}
        return (
            <div>
            <p>name: {student.name}</p>
            <p>email: {student.email}</p>
            <p>gpa: {student.gpa}</p>
            <p>campus: {studentCampus.name}</p>
            <button onClick={this.returnToPrevious}>BACK</button>
            <button onClick={this.renderEditForm}>EDIT</button>
            </div>
        )
    }
}

const mapState = (state, ownProps) => ({
    student: state.students.find(student => student.id === ownProps.studentId),
    campuses: state.campuses
})

export default connect(mapState)(Student)