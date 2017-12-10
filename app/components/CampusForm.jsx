import React from 'react'

export default function CampusForm(props) {
    return (
    <form onSubmit={ evt => {evt.preventDefault(); props.handleSubmit(evt)}}>
        <label>Name:</label>
        <input name="name" />
        <label>Image URL:</label>
        <input name="imgUrl" />
        <label>Description:</label>
        <textarea name="description" />
        <button type="submit" >SUBMIT</button>
        <button onClick={props.cancel}>CANCEL</button>
    </form>
    )
}