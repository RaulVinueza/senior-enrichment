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
        this.props.history.push(`/home/edit/campus/${this.props.campus.id}`)
    }

    renderStudent(id){
        this.props.history.push(`/students/view/${id}`)
    }

    render(){
        const campus = this.props.campus || {}
        const students = this.props.students || []
        return (
            <div>
                <h4>{campus.name}</h4>
                <p>imgUrl: {campus.imgUrl}</p>
                <p>Description: {campus.description}</p>
                <button className="btn btn-secondary" onClick={this.returnHome}>BACK TO CAMPUS LIST</button>
                <button className="btn btn-light" onClick={this.renderEditForm}>EDIT</button>
                <h5 className="my-3">Students enrolled here: </h5>
                <ul className="list-group pt-3">
                    {students.sort((s1, s2) => s1 > s2)
                        .map(student => <li className="list-group-item" onClick={() => this.renderStudent(student.id)} key={student.id}>{student.id} - {student.name}</li>)}
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
