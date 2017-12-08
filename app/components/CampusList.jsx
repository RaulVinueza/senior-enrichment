import React, {Component} from 'react'
import {connect} from 'react-redux'

class CampusList extends Component {
    constructor(){
        super()
        this.renderCampusAddForm = this.renderCampusAddForm.bind(this)
    }

    renderCampusAddForm(){
        this.props.history.push('add/campus')
    }

    render(){
        const campuses = this.props.campuses
        return (
            <div>
                <h1>CampusList</h1>
                {campuses.length && campuses.map(campus => {
                    return (
                        <div key={campus.id}>
                            <h2 > {campus.name} </h2>
                        </div>
                    )
                })}
                <button onClick={this.renderCampusAddForm}>ADD +</button>
            </div>
        )
    }
}

const mapState = state => ({
    campuses: state.campuses
})

export default connect(mapState)(CampusList)
