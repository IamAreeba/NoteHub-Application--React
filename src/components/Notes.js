 

import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem'
 
 const Notes = () => {
    const context = useContext(noteContext)
    const {notes, setNotes} = context



   return (
     <>
        <div className="container row my-3">
            <h1>Your Notes: </h1>
            {notes.map((note) => {
                // return note.title
                return <Noteitem note={note} />
            })}

        </div>
     
     
     
     </>
   )
 }
 
 export default Notes
 