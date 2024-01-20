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

    
    const host = "http://localhost:5000"
    // const notesInitial = [
    //     {
    //         "_id": "659156168a160328d5c1aff4",
    //         "user": "658d173a59470039f493ee79",
    //         "title": "My title",
    //         "description": "Please wake up early",
    //         "tag": "personal",
    //         "date": "2023-12-31T11:52:54.494Z",
    //         "__v": 0,
    //         "date": "2020-12"
    //     },
    //     {
    //         "_id": "6592b4b0c11baf7c6a392543",
    //         "user": "658d173a59470039f493ee79",
    //         "title": "My title here",
    //         "description": "Please wake up early in the morning",
    //         "tag": "personal",
    //         "date": "2024-01-01T12:48:48.363Z",
    //         "__v": 0
    //     }
    // ]

    const notesInitial = []
    

    const [notes, setNotes] = useState(notesInitial)

    // Get All Notes
    const getNotes = async () => {
        // TODO: API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4ZDE3M2E1OTQ3MDAzOWY0OTNlZTc5In0sImlhdCI6MTcwMzc0ODg0Nn0.8Y0nby8aA4XXadmcjjDr6J1W7P3fGS2LlvjWWxfsdAY"
            } 
            
        })

        // It will parse JSON and also it is an async func
        const json = await response.json()
        // console.log(json)
        setNotes(json)
    }
 
    // Add a Note
    const addNote = async (title, description, tag) => {

        // TODO: API call
        const response = await fetch (`${host}/api/notes/addNote`, {
            method: 'POST',
            headers: {
                'content-Type' : 'application/json',
                'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4ZDE3M2E1OTQ3MDAzOWY0OTNlZTc5In0sImlhdCI6MTcwMzc0ODg0Nn0.8Y0nby8aA4XXadmcjjDr6J1W7P3fGS2LlvjWWxfsdAY'
            },
            body: JSON.stringify({title, description, tag})
            
        })
        
    

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
        // console.log(id)
        const json = await response.json()
        console.log(note)
        setNotes(notes.concat(note))

    }
    


    // Delete a Note
    const deleteNote = async (id) => {
        // TODO: API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4ZDE3M2E1OTQ3MDAzOWY0OTNlZTc5In0sImlhdCI6MTcwMzc0ODg0Nn0.8Y0nby8aA4XXadmcjjDr6J1W7P3fGS2LlvjWWxfsdAY"
            },
            
        })
        console.log(id)
        const json = await response.json()
        console.log(json)


        console.log("Deleting note with is " + id)
        const newNote = notes.filter((note) => { return note._id !== id })
        setNotes(newNote)
    }

    // Edit Note
    const editNote = async (id, title, description, tag) => {

        // API calls
        const response = await fetch (`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'content-Type' : 'application/json',
                'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4ZDE3M2E1OTQ3MDAzOWY0OTNlZTc5In0sImlhdCI6MTcwMzc0ODg0Nn0.8Y0nby8aA4XXadmcjjDr6J1W7P3fGS2LlvjWWxfsdAY'
            },
            body: JSON.stringify({title, description, tag})
        })
        const json = await response.json()



        // Making newNote
        let newNote = JSON.parse(JSON.stringify(notes))

        // Logic to Edit in Client
        for(let i = 0; i < newNote.length; i++){
            const element = newNote[i]
            if(element._id === id){
                newNote[i].title = title;
                newNote[i].description = description;
                newNote[i].tag = tag;
                break
            }
        }
        console.log(id, notes)
        setNotes(newNote)
    }


    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )


}


export default NoteState