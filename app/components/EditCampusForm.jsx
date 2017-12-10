import React, {Component} from 'react'
import CampusForm from './CampusForm'
import store from '../store'
import { putCampusEdits } from '../reducers/index';

export default class EditCampusForm extends Component{
    constructor(){
        super()
        this.cancel = this.cancel.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    cancel(){
        this.props.history.push('/home')
    }

    handleSubmit(evt){
        const editedCampus = {
            name: evt.target.name.value,
            imgUrl: evt.target.imgUrl.value,
            description: evt.target.description.value
        }
        store.dispatch(putCampusEdits(this.props.campusId, editedCampus))
    }

    render(){
        return <CampusForm cancel={this.cancel} handleSubmit={this.handleSubmit} />
    }
}