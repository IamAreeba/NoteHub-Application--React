
import React , { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteState from '../context/notes/NoteState'
import { useEffect } from 'react'

const About = () => {

  const a = useContext(noteContext)

  useEffect(() => {
    a.update()
    // eslint-disable-next-line


  }, [])
  



  return (
    <div>
      This is About {a.state.name}. A girl who is {a.state.class}
    </div>
  )
}

export default About
