
import React, { useState, useContext } from 'react'
import noteContext from "../context/notes/noteContext"

const AddNote = (props) => {

    const context = useContext(noteContext)
    const { addNote } = context

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
        //To make the note empty after Adding note
        setNote({ title: "", description: "", tag: "" })

        props.showAlert("Added Successfully", "success")
    }

    // ...note. these 3 dots are basically spread operators
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="container my-3">

                <h1>Add a Note</h1>
                <form className='my-3'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label" >Title</label>
                        <input type="text" className="form-control" id="title" name="title" onChange={onChange}  minLength={5} required  value={note.title} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name='description' onChange={onChange}  minLength={5} required value={note.description} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name='tag' onChange={onChange} minLength={5} required  value={note.tag} />
                    </div>

                    <button disabled={note.title.length < 5 || note.description.length < 5 || note.tag.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}> Add Notes </button>
                </form>

            </div>


        </>
    )
}

export default AddNote
