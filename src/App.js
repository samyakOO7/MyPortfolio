import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";
import Home from './components/Home/Home'
import Certification from "./components/Certifications/Certification";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Project from "./components/Projects/Projects";
function App() {
  return (
    <Router>
    <div>   
       <nav>
        <ul>
        <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Certifications">Certifications</Link></li>
            <li><Link to="/Education">Education</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/Experience">Experience</Link></li> 
        </ul>
      </nav>
      <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Certifications" element={<Certification />} />
          <Route path="/Education" element={<Education />} />
         <Route path="/Projects" element={<Project />} />
           <Route path="/Experience" element={<Experience />} /> 
        </Routes>
        </div>
      </Router>
  );
}

export default App;
