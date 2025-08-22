import React from 'react';
import '../styles/index.css';

import Header from '../components/header';
import Main from '../components/about/main';
import Footer from '../components/footer';

function About() {
  return (
    <div className="App">
      <Header />
      <main>
        <Main />
        <Footer />
      </main>
    </div>
  );
}

export default About;
