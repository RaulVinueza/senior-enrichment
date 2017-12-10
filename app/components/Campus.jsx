import React, {Component} from 'react'
import {connect} from 'react-redux'

class Campus extends Component {
    constructor(){
        super()
        this.returnHome = this.returnHome.bind(this)
        this.renderEditForm = this.renderEditForm.bind(this)
        this.renderStudent = this.renderStudent.bind(this)
    }

    returnHome(){
        this.props.history.push('/home')
    }

    renderEditForm(){
        this.props.history.push(`/edit/campus/${this.props.campus.id}`)
    }

    renderStudent(id){
        this.props.history.push(`/students/${id}`)
    }

    render(){
        const campus = this.props.campus || {}
        const students = this.props.students || []
        return (
            <div>
                <p>Name: {campus.name}</p>
                <p>imgUrl: {campus.imgUrl}</p>
                <p>Description: {campus.description}</p>
                <button onClick={this.returnHome}>BACK</button>
                <button onClick={this.renderEditForm}>EDIT</button>
                <h3>Students</h3>
                <ul>
                    {students.sort((s1, s2) => s1 > s2)
                        .map(student => <li onClick={() => this.renderStudent(student.id)} key={student.id}>{student.id} - {student.name}</li>)}
                </ul>
            </div>
        )
    }
}

const mapState = (state, ownProps) => ({
    campus: state.campuses.find(campus => campus.id === ownProps.campusId),
    students: state.students.filter(student => student.campusId === ownProps.campusId)
})

export default connect(mapState)(Campus)
