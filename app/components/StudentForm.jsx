import React from 'react'

export default function StudentForm(props){
    const firstName = props.student && props.student.firstName || ''
    const lastName = props.student && props.student.lastName || ''
    const email = props.student && props.student.email || 'email@test.com'
    const gpa = props.student && props.student.gpa || ''
    const campusId = props.student && props.student.campusId || 1
    return (
        <div className="container">
        <form onSubmit={ evt => {evt.preventDefault(); props.handleSubmit(evt)}}>
            <label>First Name:</label>
            <input className="form-control" name="firstName" defaultValue={firstName} />
            <label>Last Name:</label>
            <input className="form-control" name="lastName" defaultValue={lastName} />
            <label>Email: </label>
            <input className="form-control" name="email" defaultValue={email} />
            <label>GPA: </label>
            <input className="form-control" name="gpa" type="number" defaultValue={gpa} />
            <label>Campus:</label>
            <select className="form-control" name="campus" defaultValue={campusId}>
                {props.campuses.map(campus => {
                    return <option key={campus.id} value={campus.id}>{campus.name}</option>
                })}
            </select>
            <button className="btn btn-primary btn-lg btn-block my-3" type="submit">SUBMIT</button>
            <button className="btn btn-default btn-lg btn-block my-3" type="button" onClick={props.cancel}>CANCEL</button>
        </form>
        </div>
    )
}

