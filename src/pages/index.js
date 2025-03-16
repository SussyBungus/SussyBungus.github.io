import React from 'react';
import '../styles/App.css'; 
import '../styles/comps/footer.css'; 
import '../styles/comps/header.css'; 
import '../styles/comps/hero.css'; 

import Header from '../components/header';
import Hero from '../components/hero';
import Footer from '../components/footer';

function index() {
  return (
    <div className="App">
      <Header />
      <main><Hero /></main>
      <Footer />
    </div>
  );
}

export default index;
