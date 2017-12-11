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
        this.props.history.push('/home/add/campus')
    }

    renderCampus(id){
        this.props.history.push(`/home/campus/${id}`)
    }

    handleDelete(id){
        store.dispatch(deleteCampusById(id))
    }

    render(){
        const campuses = this.props.campuses
        return (
            <div className="container">
            <div className="p-3">
                <button style={{cursor: 'pointer'}} className="btn btn-secondary btn-block" onClick={this.renderCampusAddForm}>ADD CAMPUS +</button>
            </div>
                {campuses.length && campuses.map(campus => {
                    return (
                        <div style={{cursor: 'pointer'}} className=" my-3 p-3 w-50 d-inline-block" key={campus.id} onClick={() => this.renderCampus(campus.id)}>
                            <div className="card">
                                <img className="card-img-top" src={campus.imgUrl} />
                                <div className="card-body">
                                    <button className="float-right" onClick={(evt) => {evt.stopPropagation(); this.handleDelete(campus.id)}}>
                                        <i className="fa fa-trash-o" aria-hidden="true" />
                                    </button>
                                    <h4 className="card-title"> {campus.name} </h4>
                                </div>
                            </div>
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
