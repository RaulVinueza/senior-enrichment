import React, {Component} from 'react'

export default class AddCampusForm extends Component {
    constructor(){
        super()
        this.cancel = this.cancel.bind(this)
    }

    cancel(){
        this.props.history.push('/home')
    }

    render(){
        return (
            <div>
                <form>
                    <label>Name</label>
                    <input name="name" />
                </form>
                <button onClick={this.cancel}>CANCEL</button>
            </div>
        )
    }
}