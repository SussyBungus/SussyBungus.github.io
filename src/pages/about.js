import React from 'react';
import '../styles/index.css';

import Header from '../components/header';
import Hero from '../components/about/hero';
import Stats from '../components/about/stats';
import Timeline from '../components/about/timeline';
import Skills from '../components/about/skills';
import Education from '../components/about/education';
import Awards from '../components/about/awards';
import Footer from '../components/footer';

function About() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Timeline />
        <Skills />
        <Education />
        <Awards />
        <Footer />
      </main>
    </div>
  );
}

export default About;
