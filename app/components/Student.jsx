import React, {Component} from 'react'
import {connect} from 'react-redux'

class Student extends Component {
    constructor(){
        super()
        this.returnToStudentList = this.returnToStudentList.bind(this)
    }

    returnToStudentList(){
        this.props.history.push('/students')
    }

    render(){
        const student = this.props.student || {}
        return (
            <div>
            <p>name: {student.name}</p>
            <p>email: {student.email}</p>
            <p>gpa: {student.gpa}</p>
            <button onClick={this.returnToStudentList}>BACK</button>
            </div>
        )
    }
}

const mapState = (state, ownProps) => ({
    student: state.students.find(student => student.id === ownProps.studentId),
})

export default connect(mapState)(Student)