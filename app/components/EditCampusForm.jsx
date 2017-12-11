import React, {Component} from 'react'
import CampusForm from './CampusForm'
import store from '../store'
import { putCampusEdits } from '../reducers/index';
import {connect} from 'react-redux'

class EditCampusForm extends Component{
    constructor(){
        super()
        this.cancel = this.cancel.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    cancel(){
        this.props.history.goBack()
    }

    handleSubmit(evt){
        const editedCampus = {
            name: evt.target.name.value,
            imgUrl: evt.target.imgUrl.value,
            description: evt.target.description.value
        }
        store.dispatch(putCampusEdits(this.props.campusId, editedCampus, this.cancel))
    }

    render(){
        
        return <CampusForm cancel={this.cancel} handleSubmit={this.handleSubmit} campus={this.props.campus} />
    }
}
const mapState = (state, ownProps) => ({
    campus: state.campuses.find(campus => campus.id === ownProps.campusId)
})
export default connect(mapState)(EditCampusForm)
