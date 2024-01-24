
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Alert from './components/Alert';
import React, { useState } from 'react';


import NoteState from "./context/notes/NoteState";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }



  return (
    <div>

      <NoteState>
        <Router>

          <Navbar />
          <Alert alert={alert} />

          <div className="container">

            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              <Route exact path="/about" element={<About showAlert={showAlert} />} />
              <Route exact path="/login" element={<Login showAlert={showAlert} />} />
              <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />

            </Routes>

          </div>


        </Router>
      </NoteState>

    </div>
  );
}

export default App;
