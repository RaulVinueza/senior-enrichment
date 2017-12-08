import React, { Component } from 'react'

export default class StudentList extends Component {
    constructor(){
        super()
        this.renderStudentAddForm = this.renderStudentAddForm.bind(this)
    }

    renderStudentAddForm(){
        this.props.history.push('add/students')
    }

    render(){
        return (
            <div>
                <h1>Students</h1>
                <button onClick={this.renderStudentAddForm}>ADD +</button>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Campus</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        )
    }
}