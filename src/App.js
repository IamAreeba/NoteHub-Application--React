
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {
  return (
    <div>

      <NoteState>
        <Router>

          <Navbar />

          <div className="container">

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />

            </Routes>

          </div>


        </Router>
      </NoteState>

    </div>
  );
}

export default App;
