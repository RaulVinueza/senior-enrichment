import React, {Component} from 'react'

export default class CampusList extends Component {
    constructor(){
        super()
        this.renderCampusAddForm = this.renderCampusAddForm.bind(this)
    }

    renderCampusAddForm(){
        this.props.history.push('add/campus')
    }

    render(){
        return (
            <div>
                <h1>CampusList</h1>
                <button onClick={this.renderCampusAddForm}>ADD +</button>
            </div>
        )
    }
}