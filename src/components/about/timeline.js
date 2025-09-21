import React, { useEffect, useState, useRef } from "react";
import "../../styles/comps/about/timeline.css";

const Timeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef();

  const timelineData = [
  {
    year: "2019",
    title: "First Lines of Code",
    content: "Started coding with basic JavaScript and built simple browser projects.",
    icon: "🌱",
    color: "#4ECDC4",
  },
  {
    year: "2020",
    title: "New Languages",
    content: "Learned Vue.js for front-end development and began exploring Python fundamentals.",
    icon: "📘",
    color: "#5D9CEC",
  },
  {
    year: "2021",
    title: "Python Deep Dive",
    content: "Focused on Python, improving problem-solving skills and backend concepts.",
    icon: "🐍",
    color: "#A29BFE",
  },
  {
    year: "2022",
    title: "Web & AI Foundations",
    content: "Explored web design principles and built interactive apps with Gradio.",
    icon: "💻",
    color: "#F78FB3",
  },
  {
    year: "2023",
    title: "JavaScript Mastery",
    content: "Studied JavaScript in depth—ES6+, advanced patterns, and full-stack workflows.",
    icon: "⚙️",
    color: "#FFB142",
  },
  {
    year: "2024",
    title: "AI & Machine Learning",
    content: "Learned AI/ML concepts and integrated them into Gradio projects.",
    icon: "🤖",
    color: "#45B7D1",
  },
  {
    year: "2025",
    title: "Innovation Era",
    content: "Building the Drift and Relax game, studying AP CS, and creating React-based AI tools.",
    icon: "🚀",
    color: "#FF9A7E",
  },
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