import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/landingComponent/LandingPage";
import AboutMe from "./components/aboutme/AboutMe";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="/about" element={<AboutMe />} />
          {/* <Route path="projects" element={} />
        <Route path="contact" element={} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
