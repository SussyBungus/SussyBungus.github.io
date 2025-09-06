import React, { useEffect, useState, useRef } from "react";
import "../../styles/comps/about/awards.css";

const AwardsTestimonialsHobbies = () => {
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef();

  const awardsData = [
    { 
      icon: "🏅", 
      title: "Grade 8 Honours", 
      description: "Academic excellence recognition",
      color: "#FFD700"
    },
    { 
      icon: "🏆", 
      title: "CCC J1/J2 Perfect Score", 
      description: "Canadian Computing Competition achievement",
      color: "#FF9A7E"
    },
    { 
      icon: "🎖️", 
      title: "Leadership Roles in SAC & MAC", 
      description: "Student government leadership positions",
      color: "#4ECDC4"
    },
    { 
      icon: "🎖️", 
      title: "Top 10 in Leetcode Contests", 
      description: "Placed in top 10 in competitive programming",
      color: "#4ECDC4"
    }
  ];

  const testimonialsData = [
    { 
      text: "Raymond is a creative problem solver who brings great energy to every project.", 
      author: "Hackathon Teammate", 
      icon: "👨‍💻",
      role: "Fellow Developer"
    },
    { 
      text: "A reliable leader who balances academics, coding, and teamwork.", 
      author: "Teacher", 
      icon: "👩‍🏫",
      role: "Computer Science Instructor"
    }
  ];

  const hobbiesData = [
    { 
      icon: "🏸", 
      title: "Badminton & Fitness",
      description: "Playing badminton & staying active",
      color: "#4ECDC4"
    },
    { 
      icon: "🎮", 
      title: "Gaming & Design",
      description: "Gaming & exploring new game designs",
      color: "#FF6B6B"
    },
    { 
      icon: "🎨", 
      title: "Digital Art",
      description: "Creating art & digital projects",
      color: "#45B7D1"
    },
    { 
      icon: "📚", 
      title: "Continuous Learning",
      description: "Reading novels & learning new concepts",
      color: "#96CEB4"
    }
  ];

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

    const elements = document.querySelectorAll('[data-observe]');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="awards-testimonials-hobbies">
      
      {/* Awards Section */}
      <section id="awards" data-observe className={`awards-section ${isVisible.awards ? 'visible' : ''}`}>
        <div className="section-container">
          <div className="section-header">
            <h2>Awards & Achievements</h2>
            <p>Recognition and milestones</p>
          </div>
          
          <div className="awards-grid">
            {awardsData.map((award, index) => (
              <div className={`award-card award-${index + 1}`} key={index}>
                <div className="award-icon" style={{ backgroundColor: award.color }}>
                  <span>{award.icon}</span>
                  <div className="icon-shine"></div>
                </div>
                
                <div className="award-content">
                  <h3>{award.title}</h3>
                  <p>{award.description}</p>
                </div>
                
                <div className="award-glow" style={{ backgroundColor: `${award.color}20` }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" data-observe className={`testimonials-section ${isVisible.testimonials ? 'visible' : ''}`}>
        <div className="section-container">
          <div className="section-header">
            <h2>What Others Say</h2>
            <p>Feedback from peers and mentors</p>
          </div>
          
          <div className="testimonials-grid">
            {testimonialsData.map((testimonial, index) => (
              <div className={`testimonial-card testimonial-${index + 1}`} key={index}>
                <div className="testimonial-quote">
                  <div className="quote-icon">"</div>
                  <p>{testimonial.text}</p>
                </div>
                
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <span>{testimonial.icon}</span>
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.author}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
                
                <div className="testimonial-decoration"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" data-observe className={`hobbies-section ${isVisible.hobbies ? 'visible' : ''}`}>
        <div className="section-container">
          <div className="section-header">
            <h2>Beyond Coding</h2>
            <p>Interests that inspire creativity</p>
          </div>
          
          <div className="hobbies-grid">
            {hobbiesData.map((hobby, index) => (
              <div className={`hobby-card hobby-${index + 1}`} key={index}>
                <div className="hobby-icon" style={{ backgroundColor: hobby.color }}>
                  <span>{hobby.icon}</span>
                </div>
                
                <div className="hobby-content">
                  <h3>{hobby.title}</h3>
                  <p>{hobby.description}</p>
                </div>
                
                <div className="hobby-bg" style={{ backgroundColor: `${hobby.color}10` }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default AwardsTestimonialsHobbies;