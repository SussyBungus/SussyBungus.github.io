import React from 'react';
import '../styles/index.css';

import Header from '../components/header';
import Intro from '../components/about/intro';
import Footer from '../components/footer';

function About() {
  return (
    <div className="App">
      <Header />
      <main>
        <Intro />
        <Footer />
      </main>
    </div>
  );
}

export default About;
