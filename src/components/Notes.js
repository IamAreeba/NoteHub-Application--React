 

import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem'
import AddNote from './AddNote'
 
 const Notes = () => {
    const context = useContext(noteContext)
    // const {notes, setNotes} = context
    const {notes, getNotes} = context
    
    useEffect(() => {
      getNotes()
    }, [])
 
   return (
     <>
        <AddNote />
        <div className="container row ">
            <h1>Your Notes: </h1>
            {notes.map((note) => {
                // return note.title
                return <Noteitem key={note._id} note={note} />
            })}

        </div>
     
     
     
     </>
   )
 }
 
 export default Notes
 