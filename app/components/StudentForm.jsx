import React from 'react'

export default function StudentForm(props){
    return (
        <form onSubmit={ evt => {evt.preventDefault(); props.handleSubmit(evt)}}>
            <label>First Name:</label>
            <input name="firstName" />
            <label>Last Name:</label>
            <input name="lastName" />
            <label>Email: </label>
            <input name="email" />
            <label>GPA: </label>
            <input name="gpa" type="number" />
            <button type="submit">SUBMIT</button>
            <button onClick={props.cancel}>CANCEL</button>
        </form>
    )
}

