import React from 'react';
import '../styles/index.css';

import Header from '../components/header';
import Hero from '../components/about/hero';
import Stats from '../components/about/stats';
import Footer from '../components/footer';

function About() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Footer />
      </main>
    </div>
  );
}

export default About;
