import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import feature1 from '../../assets/code.png';
import feature2 from '../../assets/badminton.jpg';
import feature3 from '../../assets/food.jpg';
import '../../styles/comps/index/highlights.css';

const Highlights = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    
    <motion.section
      className="highlights"
      initial={isMobile ? {} : { opacity: 0, y: 50 }}
      whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }} 
    >
      <h2 className="highlights-title" id="highlights">Highlights</h2>
      <div className="highlight-items">
        {/* First Feature - Full Width */}
        <motion.div 
          className="highlight-card" 
          whileHover={{ scale: 1.05 }}
        >
          <img src={feature1} alt="Feature 1" />
          <p className="highlight-caption">Coding</p>
        </motion.div>

        {/* Other Features */}
        <motion.div 
          className="highlight-card" 
          whileHover={{ scale: 1.05 }}
        >
          <img src={feature2} alt="Feature 2" />
          <p className="highlight-caption">Badminton</p>
        </motion.div>

        <motion.div 
          className="highlight-card" 
          whileHover={{ scale: 1.05 }}
        >
          <img src={feature3} alt="Feature 3" />
          <p className="highlight-caption">Food</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Highlights;
