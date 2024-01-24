import React, { useContext } from 'react'
import ContextValue from '../context/notes/noteContext'



const Noteitem = (props) => {

    const context = useContext(ContextValue)
    const { deleteNote } = context
    const { note, updateNote } = props

    return (
        <>
            <div className='col-md-3'>
                {/* {note.title}
                {note.description} */}


                <div className="card my-3">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <h5 className="card-title">{note.title}</h5>
                            <i className="fa-solid fa-trash-can mx-2" onClick={() => { deleteNote(note._id); props.showAlert("Deleted Successfully", "success") } }></i>
                            <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updateNote(note) }} ></i>
                            {/* <i className="fa-solid fa-trash-can mx-2"></i> */}
                            
                        

                        </div>

                        <p className="card-text">{note.description}</p>
                    </div>
                </div>

                {/* <div className="card my-3">
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab cumque porro! Blanditiis, consectetur quam.</p>
                        <div className="btn-color">


                            <a href="#" className="btn btn-outline-light"><i className="fa-solid fa-trash-can"></i></a>
                            <a href="#" className="btn btn-outline-success mx-3"><i className="fa-solid fa-pen-to-square"></i></a>
                            <a href="#" className="btn btn-outline-warning"><i className="fa-solid fa-trash-can"></i></a>
                        </div>
                    </div>
                </div> */}

            </div>

        </>
    )
}

export default Noteitem
