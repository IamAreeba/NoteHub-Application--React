import React, { useState } from "react"
import NoteContext from "./noteContext"


const NoteState = (props) => {

    /*
            const s1 = {
                "name": "Areeba",
                "class": "Uni"
            }

            const [ state, setState] = useState(s1)

            const update = () => {
                setTimeout(() => {
                    setState({
                        "name": "Aiman",
                        "class": "UBIT"
                    })
                }, 1000);
            }
            return (
                <NoteContext.Provider value={{state, update}}>
                 
                    {props.children}
                </NoteContext.Provider>
            )
    */


    const notesInitial = [
        {
            "_id": "659156168a160328d5c1aff4",
            "user": "658d173a59470039f493ee79",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2023-12-31T11:52:54.494Z",
            "__v": 0,
            "date": "2020-12"
        },
        {
            "_id": "6592b4b0c11baf7c6a392543",
            "user": "658d173a59470039f493ee79",
            "title": "My title here",
            "description": "Please wake up early in the morning",
            "tag": "personal",
            "date": "2024-01-01T12:48:48.363Z",
            "__v": 0
        },
        {
            "_id": "6592b4b0c11baf7c6a392543",
            "user": "658d173a59470039f493ee79",
            "title": "My title here",
            "description": "Please wake up early in the morning",
            "tag": "personal",
            "date": "2024-01-01T12:48:48.363Z",
            "__v": 0
        },
        {
            "_id": "6592b4b0c11baf7c6a392543",
            "user": "658d173a59470039f493ee79",
            "title": "My title here",
            "description": "Please wake up early in the morning",
            "tag": "personal",
            "date": "2024-01-01T12:48:48.363Z",
            "__v": 0
        },
        {
            "_id": "6592b4b0c11baf7c6a392543",
            "user": "658d173a59470039f493ee79",
            "title": "My title here",
            "description": "Please wake up early in the morning",
            "tag": "personal",
            "date": "2024-01-01T12:48:48.363Z",
            "__v": 0
        },
        {
            "_id": "6592b4b0c11baf7c6a392543",
            "user": "658d173a59470039f493ee79",
            "title": "My title here",
            "description": "Please wake up early in the morning",
            "tag": "personal",
            "date": "2024-01-01T12:48:48.363Z",
            "__v": 0
        },
        {
            "_id": "6592b4b0c11baf7c6a392543",
            "user": "658d173a59470039f493ee79",
            "title": "My title here",
            "description": "Please wake up early in the morning",
            "tag": "personal",
            "date": "2024-01-01T12:48:48.363Z",
            "__v": 0
        },
        {
            "_id": "6592b4b0c11baf7c6a392543",
            "user": "658d173a59470039f493ee79",
            "title": "My title here",
            "description": "Please wake up early in the morning",
            "tag": "personal",
            "date": "2024-01-01T12:48:48.363Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)

    // Add a Note
    const addNote = (title, description, tag) => {

        // TODO: API call
        // console.log("Adding a new note")
        const note = {
            "_id": "6592b4b0c11baf7c6a392543",
            "user": "658d173a59470039f493ee79",
            // "title": "My title here",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-01-01T12:48:48.363Z",
            "__v": 0
        }
        // setNotes(notes.push(note))
        setNotes(notes.concat(note))
    }
    


    // Delete a Note
    const deleteNote = (id) => {
        // TODO: API call
        console.log("Deleting note with is " + id)
        const newNote = notes.filter((note) => { return note._id !== id })
        setNotes(newNote)
    }

    // Edit Note
    const editNote = (id, title, description, tag) => {

    }


    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )


}


export default NoteState