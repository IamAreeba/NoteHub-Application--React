import React, { useContext } from 'react'
import Notes from './Notes'
const Home = (props) => {

  const {showAlert} = props
  

  return (
  
    <div>
      
      {/* <div className="container my-4">
          <h1>Your Note: </h1>
          {notes.map((note) => {
            return note.title
          })}
      </div> */}

      <Notes showAlert={showAlert} />

    </div>
  )
}

export default Home
