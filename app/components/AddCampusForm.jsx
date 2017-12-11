import React, {Component} from 'react'
import {postNewCampus} from '../reducers/campusReducer'
import store from '../store'
import CampusForm from './CampusForm'

export default class AddCampusForm extends Component {
    constructor(){
        super()
        this.cancel = this.cancel.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    cancel(){
        this.props.history.push('/home')
    }

    handleSubmit(evt){
        const newCampus = {
            name: evt.target.name.value,
            imgUrl: evt.target.imgUrl.value,
            description: evt.target.description.value
        }
        store.dispatch(postNewCampus(newCampus, this.cancel))
    }

    render(){
        return <CampusForm handleSubmit={this.handleSubmit} cancel={this.cancel} />
    }
}
