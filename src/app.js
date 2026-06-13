import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import About from "./pages/about";
import Project from "./pages/project";
import Yula from "./pages/yuliya";
import Yula1 from "./pages/yula1";
import NotFound from "./pages/error/404"; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/yuliya" element={<Yula />} />
        <Route path="/yula1" element={<Yula1 />} />

        <Route path="*" element={<NotFound />} /> {/* Catch all errors */}
      </Routes>
    </Router>
  );
};

export default App;
