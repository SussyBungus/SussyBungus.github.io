import React from 'react';
import { motion } from 'framer-motion';
import '../styles/index.css';
import '../styles/comps/header.css';
import '../styles/comps/index/hero.css';
import '../styles/comps/index/highlights.css';
import '../styles/comps/footer.css';

import Header from '../components/header';
import Hero from '../components/hero';
import Highlights from '../components/highlights';
import Footer from '../components/footer';

function Index() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Footer />
      </main>
    </div>
  );
}

export default Index;
