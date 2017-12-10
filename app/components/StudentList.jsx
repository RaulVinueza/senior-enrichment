import React, { Component } from 'react'
import {connect} from 'react-redux'

class StudentList extends Component {
    constructor(){
        super()
        this.renderStudentAddForm = this.renderStudentAddForm.bind(this)
        this.renderStudent = this.renderStudent.bind(this)
    }

    renderStudentAddForm(){
        this.props.history.push('add/students')
    }

    renderStudent(studentId){
       
        this.props.history.push(`students/${studentId}`)
    }

    render(){
        const students = this.props.students
        return (
            <div>
                <h1>Students</h1>
                <button onClick={this.renderStudentAddForm}>ADD +</button>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Campus</th>
                            <th>&nbsp;</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.length && students.map(student => {
                            return (
                                <tr key={student.id} onClick={() => this.renderStudent(student.id)}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>campus</td>
                                    <td>delete</td>
                                    <td>edit</td>
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
    students: state.students
})

export default connect(mapState)(StudentList)