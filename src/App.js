
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";


import NoteState from "./context/notes/NoteState";
import {
  BrowserRouter as Router,
  Routes,
  Route,  

} from "react-router-dom";

 
import Alert from "./components/Alert";

function App() {
  return (
    <div>

      <NoteState>
        <Router>

          <Navbar />
          <Alert message="This is Amazing" />

          <div className="container">

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />

            </Routes>

          </div>

 
        </Router>
      </NoteState>

    </div>
  );
}

export default App;
