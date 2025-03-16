import React from 'react';
import { motion } from 'framer-motion';
import feature1 from '../assets/amoung.png';
import feature2 from '../assets/amoung.png';
import feature3 from '../assets/amoung.png';

const Highlights = () => {
  return (
    <motion.section
      className="highlights"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className="highlights-title">Highlights</h2>
      <div className="highlight-items">
        {/* First Feature - Full Width */}
        <motion.div 
          className="highlight-card" 
          whileHover={{ scale: 1.05 }}
        >
          <img src={feature1} alt="Feature 1" />
          <p className="highlight-caption">🚀 Fast Performance</p>
        </motion.div>

        {/* Other Features */}
        <motion.div 
          className="highlight-card" 
          whileHover={{ scale: 1.05 }}
        >
          <img src={feature2} alt="Feature 2" />
          <p className="highlight-caption">🎨 Modern UI Design</p>
        </motion.div>

        <motion.div 
          className="highlight-card" 
          whileHover={{ scale: 1.05 }}
        >
          <img src={feature3} alt="Feature 3" />
          <p className="highlight-caption">📜 Smooth Animations</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Highlights;
