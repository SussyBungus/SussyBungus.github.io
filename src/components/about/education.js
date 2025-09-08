import React, { useEffect, useState, useRef } from "react";
import "../../styles/comps/about/education.css";

const EducationExperience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef();

  const educationData = [
    { 
      icon: "📘", 
      title: "AP Computer Science A", 
      description: "Advanced programming concepts, data structures, and algorithms",
      level: "Advanced Placement"
    },
    { 
      icon: "📐", 
      title: "AP Calculus AB", 
      description: "Differential and integral calculus for mathematical modeling",
      level: "Advanced Placement"
    },
    { 
      icon: "🌍", 
      title: "Geography & Science Enrichment", 
      description: "Interdisciplinary studies in earth sciences and spatial analysis",
      level: "Enrichment Program"
    }
  ];

  const experienceData = [
    { 
      icon: "🎮", 
      title: "Game Developer",
      company: "Drift and Relax (Unity)",
      description: "Developing an immersive racing game with realistic physics and stunning visuals",
      period: "2024 - Present"
    },
    { 
      icon: "🤖", 
      title: "Hackathon Developer",
      company: "AI Study Planner Assistant",
      description: "Built an intelligent study planning system using machine learning algorithms",
      period: "2024- Present"
    },
    { 
      icon: "🏫", 
      title: "Leadership Roles",
      company: "Student Activity Council & MAC Reps",
      description: "Leading student initiatives and representing student body in decision-making",
      period: "2024 - Present"
    }
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

    const element = document.getElementById('edu-exp-section');
    if (element) {
      observerRef.current.observe(element);
    }

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section id="edu-exp-section" className={`edu-exp-section ${isVisible ? 'visible' : ''}`}>
      <div className="edu-exp-container">
        
        {/* Education Section */}
        <div className="education-section">
          <div className="section-header">
            <h2>Education</h2>
            <p>Academic foundation</p>
          </div>
          
          <div className="education-grid">
            {educationData.map((item, index) => (
              <div className={`education-card edu-${index + 1}`} key={index}>
                <div className="card-icon">
                  <span>{item.icon}</span>
                  <div className="icon-glow"></div>
                </div>
                
                <div className="card-content">
                  <div className="card-level">{item.level}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                
                <div className="card-decoration"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="experience-section">
          <div className="section-header">
            <h2>Experience</h2>
            <p>Practical applications</p>
          </div>
          
          <div className="experience-grid">
            {experienceData.map((item, index) => (
              <div className={`experience-card exp-${index + 1}`} key={index}>
                <div className="card-timeline">
                  <span className="timeline-dot"></span>
                  <span className="timeline-period">{item.period}</span>
                </div>
                
                <div className="card-main">
                  <div className="card-icon">
                    <span>{item.icon}</span>
                  </div>
                  
                  <div className="card-content">
                    <h3>{item.title}</h3>
                    <div className="card-company">{item.company}</div>
                    <p>{item.description}</p>
                  </div>
                </div>
                
                <div className="card-decoration"></div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default EducationExperience;