import React, { useEffect, useState, useRef } from "react";
import "../../styles/comps/about/timeline.css";

const Timeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef();

  const timelineData = [
    { 
      year: "2019", 
      title: "The Beginning",
      content: "Started coding seriously — Python basics & problem solving", 
      icon: "🌱",
      color: "#4ECDC4"
    },
    { 
      year: "2024", 
      title: "Expansion Phase",
      content: "Built projects in Unity & explored web dev with React", 
      icon: "🚀",
      color: "#45B7D1"
    },
    { 
      year: "2025", 
      title: "Innovation Era",
      content: "Developing Drift and Relax, studying AP Computer Science, and creating AI tools", 
      icon: "⚡",
      color: "#FF9A7E"
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

    const element = document.getElementById('timeline-section');
    if (element) {
      observerRef.current.observe(element);
    }

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section id="timeline-section" className={`timeline-section ${isVisible ? 'visible' : ''}`}>
      <div className="timeline-container">
        <div className="timeline-header">
          <h2>My Journey</h2>
          <p>The path that led me here</p>
        </div>
        
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          
          {timelineData.map((item, index) => (
            <div className={`timeline-item timeline-${index + 1} ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
              <div className="timeline-content">
                <div className="timeline-card">
                  <div className="card-header">
                    <div className="timeline-icon" style={{ backgroundColor: item.color }}>
                      {item.icon}
                    </div>
                    <div className="timeline-year">{item.year}</div>
                  </div>
                  
                  <div className="card-body">
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                  
                  <div className="card-decoration" style={{ backgroundColor: `${item.color}15` }}></div>
                </div>
              </div>
              
              <div className="timeline-dot" style={{ backgroundColor: item.color }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;