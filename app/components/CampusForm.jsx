import React from 'react'

export default function CampusForm(props) {
    const name = props.campus && props.campus.name || ''
    const imgUrl = props.campus && props.campus.imgUrl || ''
    const description = props.campus && props.campus.description || ''
    return (
    <form onSubmit={ evt => {evt.preventDefault(); props.handleSubmit(evt)}}>
        <label>Name:</label>
        <input className="form-control" name="name" defaultValue={name} />
        <label>Image URL:</label>
        <input className="form-control" name="imgUrl" defaultValue={imgUrl} />
        <label>Description:</label>
        <textarea className="form-control" name="description" defaultValue={description} />
        <button type="submit" >SUBMIT</button>
        <button type="button" onClick={props.cancel}>CANCEL</button>
    </form>
    )
}