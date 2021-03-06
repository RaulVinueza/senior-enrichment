import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deleteStudentById} from '../reducers/studentReducer'
import store from '../store'

class StudentList extends Component {
    constructor(){
        super()
        this.renderStudentAddForm = this.renderStudentAddForm.bind(this)
        this.renderStudent = this.renderStudent.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    renderStudentAddForm(){
        this.props.history.push('/students/add')
    }

    renderStudent(studentId){  
        this.props.history.push(`students/view/${studentId}`)
    }

    handleDelete(id){
        store.dispatch(deleteStudentById(id))
    }

    render(){
        const students = this.props.students
        const campuses = this.props.campuses
        return (
            <div className="container">
                <button className="btn btn-secondary my-3" onClick={this.renderStudentAddForm}>ADD +</button>
                <table style={{cursor: 'pointer'}} className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Campus</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.length && students.sort((s1, s2) => s1.id > s2.id )
                        .map(student => {
                            const studentCampus = campuses.find(campus => campus.id === student.campusId) || {}
                            return (
                                <tr key={student.id} onClick={() => this.renderStudent(student.id)}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{studentCampus.name}</td>
                                    <td onClick={evt => {evt.stopPropagation(); this.handleDelete(student.id)}}><i className="fa fa-trash-o" aria-hidden="true" /></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapState = state => ({
    students: state.students,
    campuses: state.campuses
})

export default connect(mapState)(StudentList)