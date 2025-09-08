import React, { useEffect, useState } from "react";
import rayray from "../../assets/heh.jpg";
import '../../styles/comps/index/hero.css';
const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Developer",
    "Problem Solver", 
    "Innovator"
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    // Cycle through roles
    const roleInterval = setInterval(() => {
      setCurrentRole((prevRole) => {
        const nextRole = (prevRole + 1) % roles.length;
        console.log('Role changing from', prevRole, 'to', nextRole, roles[nextRole]); // Debug log
        return nextRole;
      });
    }, 2500);

    return () => clearInterval(roleInterval);
  }, [roles.length]);

  console.log('Current role index:', currentRole, 'Role:', roles[currentRole]); // Debug log

  return (
    <section className={`hero ${isLoaded ? 'loaded' : ''}`}>
      {/* Background decorative elements */}
      <div className="hero-bg-decoration">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
      </div>

      <div className="hero__content">
        <h1 className="hero__title" id="typewriter">
          Hi, I'm <span className="name-highlight">Raymond Lin!</span>
        </h1>
        
        <div className="hero__role-cycle">
          {roles.map((role, index) => (
            <span
              key={index}
              className={`role-item ${index === currentRole ? 'active' : ''}`}
            >
              {role}
            </span>
          ))}
        </div>
        
        <p className="hero__description">
          I create <strong>engaging experiences</strong> through code.
        </p>
        
        <div className="hero__buttons">
          <a href="#goals" className="hero__cta">
            <span>View My Goals</span>
            <div className="button-shine"></div>
          </a>
          <a href="https://instagram.com/sussy_bungus" className="hero__cta hero__cta--secondary">
            <span>Contact Me</span>
          </a>
        </div>
      </div>

      <div className="hero__image">
        <div className="image-decoration-ring"></div>
        <div className="image-container">
          <img src={rayray} alt="Raymond Lin" />
          <div className="image-overlay"></div>
        </div>
        <div className="floating-badge">
          <span className="badge-dot"></span>
          Available for opportunities
        </div>
      </div>
    </section>
  );
};

export default Hero;