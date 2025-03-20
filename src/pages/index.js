import React from 'react';
import '../styles/index.css';
import '../styles/comps/header.css';
import '../styles/comps/index/hero.css';
import '../styles/comps/index/highlights.css';
import '../styles/comps/index/goals.css';
import '../styles/comps/footer.css';

import Header from '../components/header';
import Hero from '../components/index/hero';
import Highlights from '../components/index/highlights';
import Goals from '../components/index/goals';
import Footer from '../components/footer';

function Index() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Goals />
        <Footer />
      </main>
    </div>
  );
}

export default Index;
