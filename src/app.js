import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import About from "./pages/about";
import Project from "./pages/project";
import Yula from "./pages/yuliya";
import Yula1 from "./pages/cherry/yula1";
import Yula2 from "./pages/cherry/yula2";
import Yula3 from "./pages/cherry/yula3";
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
        <Route path="/yula2" element={<Yula2 />} />
        <Route path="/yula3" element={<Yula3 />} />
        <Route path="*" element={<NotFound />} /> {/* Catch all errors */}
      </Routes>
    </Router>
  );
};

export default App;
