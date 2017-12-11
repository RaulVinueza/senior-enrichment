import React from 'react'

export default function CampusForm(props) {
    const name = props.campus && props.campus.name || ''
    const imgUrl = props.campus && props.campus.imgUrl || ''
    const description = props.campus && props.campus.description || ''
    return (
    <form onSubmit={ evt => {evt.preventDefault(); props.handleSubmit(evt)}}>
        <label>Name:</label>
        <input name="name" defaultValue={name} />
        <label>Image URL:</label>
        <input name="imgUrl" defaultValue={imgUrl} />
        <label>Description:</label>
        <textarea name="description" defaultValue={description} />
        <button type="submit" >SUBMIT</button>
        <button type="button" onClick={props.cancel}>CANCEL</button>
    </form>
    )
}