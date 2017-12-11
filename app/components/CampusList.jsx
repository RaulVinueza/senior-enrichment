import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteCampusById} from '../reducers/campusReducer'
import store from '../store'

class CampusList extends Component {
    constructor(){
        super()
        this.renderCampusAddForm = this.renderCampusAddForm.bind(this)
        this.renderCampus = this.renderCampus.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    renderCampusAddForm(){
        this.props.history.push('add/campus')
    }

    renderCampus(id){
        this.props.history.push(`campus/${id}`)
    }

    handleDelete(id){
        store.dispatch(deleteCampusById(id))
    }

    render(){
        const campuses = this.props.campuses
        return (
            <div>
                <button onClick={this.renderCampusAddForm}>ADD CAMPUS +</button>
                {campuses.length && campuses.map(campus => {
                    return (
                        <div key={campus.id} onClick={() => this.renderCampus(campus.id)}>
                            <h2 > {campus.name} </h2>
                            <button onClick={(evt) => {evt.stopPropagation(); this.handleDelete(campus.id)}}>DELETE</button>
                        </div>
                    )
                })}
                
            </div>
        )
    }
}

const mapState = state => ({
    campuses: state.campuses
})

export default connect(mapState)(CampusList)
