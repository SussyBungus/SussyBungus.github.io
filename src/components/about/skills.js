import React, { useEffect, useState, useRef } from "react";
import "../../styles/comps/about/skills.css";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef();

  const skills = [
    { name: "Python", icon: "🐍", level: 90, color: "#3776AB", description: "Data structures, algorithms, AI/ML" },
    { name: "Java", icon: "☕", level: 85, color: "#ED8B00", description: "OOP, data structures, AP Computer Science" },
    { name: "JavaScript", icon: "⚡", level: 88, color: "#F7DF1E", description: "ES6+, async programming, DOM manipulation" },
    { name: "C#", icon: "🔷", level: 80, color: "#239120", description: "Unity development, game programming" },
    { name: "Unity", icon: "🎮", level: 85, color: "#000000", description: "Game development, 3D graphics, physics" },
    { name: "React", icon: "⚛️", level: 82, color: "#61DAFB", description: "Components, hooks, modern web apps" },
    { name: "SQL", icon: "🗄️", level: 75, color: "#4479A1", description: "Database design, queries, data management" },
    { name: "AI/ML", icon: "🧠", level: 70, color: "#FF6B6B", description: "Machine learning basics, neural networks" },
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

    const element = document.getElementById('skills-section');
    if (element) {
      observerRef.current.observe(element);
    }

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section id="skills-section" className={`skills-section ${isVisible ? 'visible' : ''}`}>
      <div className="skills-container">
        <div className="skills-header">
          <h2>Languages & Tools</h2>
          <p>Technologies I work with</p>
        </div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className={`skill-card skill-${index + 1}`} key={index}>
              <div className="skill-header">
                <div className="skill-icon-wrapper">
                  <span className="skill-icon">{skill.icon}</span>
                  <div className="icon-ring" style={{ borderColor: skill.color }}></div>
                </div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-percent" style={{ color: skill.color }}>
                    {skill.level}%
                  </span>
                </div>
              </div>
              
              <div className="skill-description">
                <p>{skill.description}</p>
              </div>
              
              <div className="skill-bar-container">
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      backgroundColor: skill.color,
                      transitionDelay: `${index * 150}ms`
                    }}
                  >
                    <div className="progress-shine"></div>
                  </div>
                </div>
              </div>
              
              <div className="skill-bg-glow" style={{ backgroundColor: `${skill.color}10` }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;