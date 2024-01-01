import react, { useState } from "react"
import NoteContext from "./noteContext"


const NoteState = (props) => {

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

}


export default NoteState