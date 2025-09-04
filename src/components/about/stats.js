import React, { useEffect, useRef, useState } from "react";
import "../../styles/comps/about/stats.css";

const Stats = () => {
  const statsRef = useRef([]);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef();

  const statsData = [
    { label: "Years Coding", value: 7, icon: "💻", color: "#FF6B6B", description: "Building digital solutions" },
    { label: "Projects Completed", value: 6, icon: "🚀", color: "#4ECDC4", description: "From concept to reality" },
    { label: "Hackathon Project", value: 2, icon: "⚡", color: "#45B7D1", description: "AI-powered innovation" },
    { label: "Leadership Roles", value: 3, icon: "👑", color: "#96CEB4", description: "Guiding teams to success" },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observerRef.current.observe(element);
    }

    return () => observerRef.current?.disconnect();
  }, []);

  // Animate stats numbers
  useEffect(() => {
    if (isVisible) {
      statsRef.current.forEach((stat, index) => {
        if (!stat) return;
        let start = 0;
        const end = statsData[index].value;
        const duration = 2500;
        const stepTime = Math.abs(Math.floor(duration / (end || 1)));
        
        const timer = setInterval(() => {
          start += 1;
          stat.innerText = start + (index === 1 ? "+" : "");
          if (start >= end) clearInterval(timer);
        }, stepTime);
      });
    }
  }, [isVisible]);

  return (
    <section id="stats-section" className={`stats-section ${isVisible ? 'visible' : ''}`}>
      <div className="stats-container">
        <div className="stats-header">
          <h2>Quick Stats</h2>
          <p>Numbers that tell my story</p>
        </div>
        
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div className={`stat-card stat-${index + 1}`} key={index}>
              <div className="stat-icon-wrapper">
                <span className="stat-icon">{stat.icon}</span>
                <div className="icon-glow" style={{ backgroundColor: `${stat.color}20` }}></div>
              </div>
              
              <div className="stat-content">
                <h3 
                  ref={(el) => (statsRef.current[index] = el)}
                  className="stat-number"
                  style={{ color: stat.color }}
                >
                  0
                </h3>
                <p className="stat-label">{stat.label}</p>
                <span className="stat-description">{stat.description}</span>
              </div>
              
              <div className="stat-bg-decoration" style={{ backgroundColor: `${stat.color}08` }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;