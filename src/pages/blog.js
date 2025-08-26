import React from 'react';
import '../styles/index.css';

import Header from '../components/header';
import Gallery from '../components/gallery/gallery';
import Footer from '../components/footer';

function About() {
  return (
    <div className="App">
      <Header />
      <main>
        <Gallery />
        <Footer />
      </main>
    </div>
  );
}

export default About;
