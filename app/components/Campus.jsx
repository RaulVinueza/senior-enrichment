import React, {Component} from 'react'
import {connect} from 'react-redux'

class Campus extends Component {
    constructor(){
        super()
        this.returnHome = this.returnHome.bind(this)
        this.renderEditForm = this.renderEditForm.bind(this)
    }

    returnHome(){
        this.props.history.push('/home')
    }

    renderEditForm(){
        this.props.history.push(`/edit/campus/${this.props.campus.id}`)
    }

    render(){
        const campus = this.props.campus || {}
        return (
            <div>
            <p>name: {campus.name}</p>
            <p>email: {campus.imgUrl}</p>
            <p>gpa: {campus.description}</p>
            <button onClick={this.returnHome}>BACK</button>
            <button onClick={this.renderEditForm}>EDIT</button>
            </div>
        )
    }
}

const mapState = (state, ownProps) => ({
    campus: state.campuses.find(campus => campus.id === ownProps.campusId)
})

export default connect(mapState)(Campus)
