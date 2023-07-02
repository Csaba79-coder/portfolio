import { Routes, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import About from "./aboutme";
import Project from "./projects";
import Contact from "./contact";
import Resume from "./resume";

const Main = () => (
    <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
    </Routes>
);

export default Main;
