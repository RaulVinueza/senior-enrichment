import React, {Component} from 'react'

export default class AddStudentform extends Component {
    constructor(){
        super()
        this.cancel = this.cancel.bind(this)
    }

    cancel(){
        this.props.history.push('/students')
    }

    render(){
        return (
            <div>
                <form>
                    <label>First Name:</label>
                    <input name='firstName' type='text' />
                    <label>Last Name:</label>
                    <input name='lastName' type='text' />
                </form>
                <button onClick={this.cancel}>CANCEL</button>
            </div>
        )
    }
}