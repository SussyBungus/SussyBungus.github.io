import React, { useEffect, useState } from "react";
import "../../styles/comps/about/hero.css";
import rayray from "../../assets/sus.jpg";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section 
      className={`hero-section ${isLoaded ? 'loaded' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Decorative Elements */}
      <div className="hero-bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>

      {/* Avatar Section */}
      <div className="hero-avatar">
        <div className="avatar-ring">
          <div 
            className="avatar-inner"
            style={{
              transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
            }}
          >
            <span className="avatar-emoji"><img src={rayray} alt="raymond"></img></span>
            <div className="avatar-glow"></div>
          </div>
        </div>
        
        <div className="floating-elements">
          <div className="floating-icon icon-1">⚡</div>
          <div className="floating-icon icon-2">🚀</div>
          <div className="floating-icon icon-3">💡</div>
        </div>
      </div>
      
      {/* Text Content */}
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            <span className="greeting">Hello, I'm</span>
            <span className="name-highlight">Raymond Lin</span>
            <div className="name-underline"></div>
          </h1>
          
          <p className="hero-subtitle">
            A curious <span className="highlight-word">computer engineering</span> student 
            blending creativity with code to bring innovative ideas to life
          </p>
          
          <div className="hero-description">
            <p>
              Welcome to my digital universe! I'm passionate about crafting elegant solutions, 
              leading dynamic teams, and exploring cutting-edge technologies. From immersive 
              game experiences to intelligent AI tools, I transform complex challenges into 
              beautiful, functional code.
            </p>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Coding</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Leadership Roles</span>
            </div>
          </div>
          
          <div className="hero-tags">
            <span className="tag tag-1">
              <span className="tag-icon">🎓</span>
              Student Developer
            </span>
            <span className="tag tag-2">
              <span className="tag-icon">🚀</span>
              Innovation Seeker
            </span>
            <span className="tag tag-3">
              <span className="tag-icon">💡</span>
              Problem Solver
            </span>
          </div>

          <div className="hero-cta">
            <button className="cta-button primary">
              <span>View My Work</span>
              <div className="button-shine"></div>
            </button>
            <button className="cta-button secondary">
              <span>Get In Touch</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow">
          <span>↓</span>
        </div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;