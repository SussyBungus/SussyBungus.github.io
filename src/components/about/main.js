import React, { useEffect, useRef, useState } from "react";
import "../../styles/comps/about/hero.css";

const AboutMe = () => {
  const statsRef = useRef([]);
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef();

  const statsData = [
    { label: "Years Coding", value: 2, icon: "💻" },
    { label: "Projects Completed", value: 10, icon: "🚀" },
    { label: "Hackathon Project", value: 1, icon: "⚡" },
    { label: "Leadership Roles", value: 3, icon: "👑" },
  ];

  const skills = [
    { name: "Python", icon: "🐍", level: 90 },
    { name: "Java", icon: "☕", level: 85 },
    { name: "JavaScript", icon: "⚡", level: 88 },
    { name: "C#", icon: "🔷", level: 80 },
    { name: "Unity", icon: "🎮", level: 85 },
    { name: "React", icon: "⚛️", level: 82 },
    { name: "SQL", icon: "🗄️", level: 75 },
    { name: "AI/ML", icon: "🧠", level: 70 },
  ];

  const timelineData = [
    { 
      year: "2023", 
      content: "Started coding seriously — Python basics & problem solving", 
      icon: "🌱" 
    },
    { 
      year: "2024", 
      content: "Built projects in Unity & explored web dev with React", 
      icon: "🚀" 
    },
    { 
      year: "2025", 
      content: "Developing Drift and Relax, studying AP Computer Science, and creating AI tools", 
      icon: "⚡" 
    }
  ];

  const educationData = [
    { icon: "📘", text: "AP Computer Science A" },
    { icon: "📐", text: "AP Calculus AB" },
    { icon: "🌍", text: "Geography & Science Enrichment" }
  ];

  const experienceData = [
    { icon: "🎮", text: "Game Developer — Drift and Relax (Unity)" },
    { icon: "🤖", text: "Hackathon Developer — AI Study Planner Assistant" },
    { icon: "🏫", text: "Student Activity Council (SAC) & MAC Reps Leadership" }
  ];

  const awardsData = [
    { icon: "🏅", text: "Grade 8 Honours" },
    { icon: "🏆", text: "CCC J1/J2 Perfect Score" },
    { icon: "🎖️", text: "Leadership Roles in SAC & MAC" }
  ];

  const testimonialsData = [
    { 
      text: "Raymond is a creative problem solver who brings great energy to every project.", 
      author: "Hackathon Teammate", 
      icon: "👨‍💻" 
    },
    { 
      text: "A reliable leader who balances academics, coding, and teamwork.", 
      author: "Teacher", 
      icon: "👩‍🏫" 
    }
  ];

  const hobbiesData = [
    { icon: "🏸", text: "Playing badminton & staying active" },
    { icon: "🎮", text: "Gaming & exploring new game designs" },
    { icon: "🎨", text: "Creating art & digital projects" },
    { icon: "📚", text: "Reading novels & learning new concepts" }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  // Animate stats numbers
  useEffect(() => {
    if (isVisible.stats) {
      statsRef.current.forEach((stat, index) => {
        if (!stat) return;
        let start = 0;
        const end = statsData[index].value;
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / (end || 1)));
        const timer = setInterval(() => {
          start += 1;
          stat.innerText = start + (index === 1 ? "+" : "");
          if (start >= end) clearInterval(timer);
        }, stepTime);
      });
    }
  }, [isVisible.stats]);

  return (
    <div className="about">

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-avatar">
          <div className="avatar-ring">
            <div className="avatar-inner">
              <span className="avatar-emoji">👨‍💻</span>
            </div>
          </div>
          <div className="floating-icon">⚡</div>
        </div>
        
        <div className="hero-text">
          <h1>Hello, I'm <span className="highlight">Raymond Lin</span></h1>
          <p className="hero-subtitle">A curious student diving deep into <strong>computer engineering</strong> — blending creativity with code to bring ideas to life.</p>
          
          <div className="hero-description">
            <p>Welcome to my digital world! I'm passionate about building innovative solutions, leading teams, and constantly learning new technologies. From game development to AI tools, I love turning complex problems into elegant code.</p>
          </div>
          
          <div className="hero-tags">
            <span className="tag">🎓 Student Developer</span>
            <span className="tag">🚀 Innovation Seeker</span>
            <span className="tag">💡 Problem Solver</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div id="stats" data-animate className={`about-section fade-in ${isVisible.stats ? 'visible' : ''}`}>
        <h2 className="section__title gradient-text">Quick Stats ⚡</h2>
        <div className="stats">
          {statsData.map((stat, index) => (
            <div className="stat enhanced-stat" key={index}>
              <div className="stat-icon">{stat.icon}</div>
              <h3 ref={(el) => (statsRef.current[index] = el)}>0</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TIMELINE */}
      <div id="timeline" data-animate className={`about-section fade-in ${isVisible.timeline ? 'visible' : ''}`}>
        <h2 className="section__title gradient-text">My Journey 🛤️</h2>
        <div className="timeline enhanced-timeline">
          <div className="timeline-line"></div>
          {timelineData.map((item, index) => (
            <div className={`timeline__item enhanced-timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-icon">{item.icon}</div>
                  <span className="timeline__date">{item.year}</span>
                </div>
                <p>{item.content}</p>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
      </div>

      {/* SKILLS */}
      <div id="skills" data-animate className={`about-section fade-in ${isVisible.skills ? 'visible' : ''}`}>
        <h2 className="section__title gradient-text">Languages & Tools 🛠️</h2>
        <div className="skills enhanced-skills">
          {skills.map((skill, index) => (
            <div className="skill enhanced-skill" key={index}>
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress"
                  style={{ 
                    width: isVisible.skills ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 100}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EDUCATION & EXPERIENCE */}
      <div className="two-column-section">
        <div id="education" data-animate className={`about-section fade-in ${isVisible.education ? 'visible' : ''}`}>
          <h2 className="section__title gradient-text">Education 📚</h2>
          <div className="list-items">
            {educationData.map((item, index) => (
              <div className="list-item" key={index}>
                <span className="item-icon">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div id="experience" data-animate className={`about-section fade-in ${isVisible.experience ? 'visible' : ''}`}>
          <h2 className="section__title gradient-text">Experience 💼</h2>
          <div className="list-items">
            {experienceData.map((item, index) => (
              <div className="list-item" key={index}>
                <span className="item-icon">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AWARDS */}
      <div id="awards" data-animate className={`about-section fade-in ${isVisible.awards ? 'visible' : ''}`}>
        <h2 className="section__title gradient-text">Awards & Achievements 🏆</h2>
        <div className="awards">
          {awardsData.map((award, index) => (
            <div className="award enhanced-award" key={index}>
              <div className="award-icon">{award.icon}</div>
              <span>{award.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div id="testimonials" data-animate className={`about-section fade-in ${isVisible.testimonials ? 'visible' : ''}`}>
        <h2 className="section__title gradient-text">What Others Say 💬</h2>
        <div className="testimonials">
          {testimonialsData.map((testimonial, index) => (
            <div className="testimonial enhanced-testimonial" key={index}>
              <div className="testimonial-icon">{testimonial.icon}</div>
              <p>"{testimonial.text}"</p>
              <span className="testimonial-author">— {testimonial.author}</span>
            </div>
          ))}
        </div>
      </div>

      {/* HOBBIES */}
      <div id="hobbies" data-animate className={`about-section fade-in ${isVisible.hobbies ? 'visible' : ''}`}>
        <h2 className="section__title gradient-text">Beyond Coding 🌟</h2>
        <div className="hobbies">
          {hobbiesData.map((hobby, index) => (
            <div className="hobby enhanced-hobby" key={index}>
              <div className="hobby-icon">{hobby.icon}</div>
              <p>{hobby.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;