import React from 'react';
import '../styles/index.css';

import Header from '../components/header';
import Project from '../components/projects/project'
import Footer from '../components/footer';

function Projects() {
  return (
    <div className="App">
      <Header />
      <main>
        < Project/>
        <Footer />
      </main>
    </div>
  );
}

export default Projects;
