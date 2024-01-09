import React, { useContext } from 'react'
import Notes from './Notes'


const Home = () => {

  return (

    <div>
      
      {/* <div className="container my-4">
          <h1>Your Note: </h1>
          {notes.map((note) => {
            return note.title
          })}
      </div> */}

      <Notes />

    </div>
  )
}

export default Home
