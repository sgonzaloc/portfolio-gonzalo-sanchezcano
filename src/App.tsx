import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import BeyonCode from "./pages/BeyonCode.tsx";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe.tsx";
import Resume from "./pages/Resume";
import ProjectDetail from "./pages/ProjectDetail";
import Languages from "./pages/Languages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/beyond_code" element={<BeyonCode />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about_me" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />,
        <Route path="/Languages" element={<Languages />} />,
      </Routes>
    </BrowserRouter>
  );
}

export default App;
