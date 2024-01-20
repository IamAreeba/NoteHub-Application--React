

import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem'
import AddNote from './AddNote'

const Notes = () => {
  const context = useContext(noteContext)
  // const {notes, setNotes} = context
  const { notes, getNotes, editNote } = context

  useEffect(() => {
    getNotes()
  }, [])

  

  const ref = useRef(null)
  const refClose = useRef()
  const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: ""})


  const updateNote = (currentNote) => {
    ref.current.click()
    setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag})
  }

    const handleClick = (e) => {
      console.log("Handle click " , note)
        // e.preventDefault()
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click()
    }

    // ...note. these 3 dots are basically spread operators
    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }




  return (
    <>
      <AddNote />

      <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" ref={ref} data-bs-target="#exampleModal">
        Launch demo modal
      </button>


      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button"  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">


              <form className='my-3'>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label" >Title</label>
                  <input type="text" value={note.etitle} className="form-control" id="etitle" name="etitle" onChange={onChange} aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" value={note.edescription} className="form-control" id="edescription" name='edescription' onChange={onChange} />
                </div>

                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" value={note.etag} className="form-control" id="etag" name='etag' onChange={onChange} />
                </div>

              </form>


            </div>
            <div className="modal-footer">
              <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>


      <div className="container row ">
        <h1>Your Notes: </h1>
        {notes.map((note) => {
          // return note.title
          return <Noteitem key={note._id} updateNote={updateNote} note={note} />
        })}

      </div>



    </>
  )
}

export default Notes
