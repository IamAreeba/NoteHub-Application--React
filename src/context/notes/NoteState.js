import react, { useState } from "react"
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

    const [ notes, setNotes ] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )


}


export default NoteState