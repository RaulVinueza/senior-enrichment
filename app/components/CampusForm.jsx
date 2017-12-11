import React from 'react'

export default function CampusForm(props) {
    const name = props.campus && props.campus.name || ''
    const imgUrl = props.campus && props.campus.imgUrl || ''
    const description = props.campus && props.campus.description || ''
    return (
    <div className="container">
    <form onSubmit={ evt => {evt.preventDefault(); props.handleSubmit(evt)}}>
        <label>Name:</label>
        <input className="form-control" name="name" defaultValue={name} />
        <label>Image URL:</label>
        <input className="form-control" name="imgUrl" defaultValue={imgUrl} />
        <label>Description:</label>
        <textarea className="form-control" name="description" defaultValue={description} />
        <button className="btn btn-primary btn-lg btn-block my-3" type="submit" >SUBMIT</button>
        <button className="btn btn-default btn-lg btn-block my-3" type="button" onClick={props.cancel}>CANCEL</button>
    </form>
    </div>
    )
}