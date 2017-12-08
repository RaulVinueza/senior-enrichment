import React, {Component} from 'react'
import {connect} from 'react-redux'

class Student extends Component {
    constructor(){
        super()
    }

    render(){
        const student = this.props.student
        return (
            <div>
            <p>name: {student.name}</p>
            <p>email: {student.email}</p>
            <p>gpa: {student.gpa}</p>
            </div>
        )
    }
}

//get own props with a router that uses the render attribute
const mapState = (state, ownProps) => ({
    student: state.students.find(student => student.id === ownProps.studentId)
})

export default connect(mapState)(Student)