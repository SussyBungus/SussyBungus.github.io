import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import About from "./pages/about";
import Project from "./pages/project";
import Gallery from "./pages/blog";
import Valentine from "./pages/valentine";
import Test from "./pages/test";
import NotFound from "./pages/error/404"; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/valentine" element={<Valentine />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<NotFound />} /> {/* Catch all errors */}
      </Routes>
    </Router>
  );
};

export default App;
