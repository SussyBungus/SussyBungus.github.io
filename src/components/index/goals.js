import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../../styles/comps/index/goals.css';


const Goals = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="goals">
      <h2 className="goals-title">My Goals</h2>
      <div className="goals-list">
        {[
          '🚀 Improve My Coding Skills',
          '🏸 Get Better at Badminton',
          '🌟 Build Meaningful Projects',
        ].map((goal, index) => (
          <motion.div
            key={index}
            className={`goal-card ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            whileHover={isMobile ? {} : { scale: 1.05 }}
          >
            <h3>{goal}</h3>
            <p>
              {index === 0
                ? 'Master problem-solving and algorithms for competitions.'
                : index === 1
                ? 'Practice consistently and refine my techniques.'
                : 'Create apps, games, and tools that help others.'}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Goals;
