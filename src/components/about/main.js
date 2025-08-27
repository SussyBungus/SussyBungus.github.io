import React, { useEffect, useRef } from "react";
import "../../styles/comps/about/hero.css";

const AboutMe = () => {
  const statsRef = useRef([]);

  const statsData = [
    { label: "Years Coding", value: 2 },
    { label: "Projects Completed", value: 10 },
    { label: "Hackathon Project", value: 1 },
    { label: "Leadership Roles", value: 3 },
  ];

  // Animate stats numbers
  useEffect(() => {
    statsRef.current.forEach((stat, index) => {
      let start = 0;
      const end = statsData[index].value;
      const duration = 1200;
      const stepTime = Math.abs(Math.floor(duration / (end || 1)));
      const timer = setInterval(() => {
        start += 1;
        stat.innerText = start + (index === 1 ? "+" : "");
        if (start >= end) clearInterval(timer);
      }, stepTime);
    });
  }, []);

  return (
    <section className="about">
      {/* HERO */}
      <div className="hero fade-in">
        <div className="hero__text">
          <h1>Hello, I’m <span className="highlight">Raymond Lin</span></h1>
          <p>A curious student diving deep into <strong>computer engineering</strong> — blending creativity with code to bring ideas to life.</p>
        </div>
      </div>

      {/* STATS */}
      <div className="about-section fade-in">
        <h2 className="section__title">Quick Stats</h2>
        <div className="stats">
          {statsData.map((stat, index) => (
            <div className="stat" key={index}>
              <h3 ref={(el) => (statsRef.current[index] = el)}>0</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TIMELINE */}
      <div className="about-section fade-in">
        <h2 className="section__title">My Journey</h2>
        <div className="timeline">
          <div className="timeline__item">
            <span className="timeline__date">2023</span>
            <p>Started coding seriously — Python basics & problem solving</p>
          </div>
          <div className="timeline__item">
            <span className="timeline__date">2024</span>
            <p>Built projects in <strong>Unity</strong> & explored web dev with <strong>React</strong></p>
          </div>
          <div className="timeline__item">
            <span className="timeline__date">2025</span>
            <p>Developing <em>Drift and Relax</em>, studying <strong>AP Computer Science</strong>, and creating AI tools</p>
          </div>
        </div>
      </div>

      {/* EDUCATION */}
      <div className="about-section fade-in">
        <h2 className="section__title">Education</h2>
        <ul className="edu__list">
          <li>📘 AP Computer Science A</li>
          <li>📐 AP Calculus AB</li>
          <li>🌍 Geography & Science Enrichment</li>
        </ul>
      </div>

      {/* EXPERIENCE */}
      <div className="about-section fade-in">
        <h2 className="section__title">Experience</h2>
        <ul className="exp__list">
          <li>🎮 Game Developer — <em>Drift and Relax</em> (Unity)</li>
          <li>🤖 Hackathon Developer — AI Study Planner Assistant</li>
          <li>🏫 Student Activity Council (SAC) & MAC Reps Leadership</li>
        </ul>
      </div>

      {/* SKILLS */}
      <div className="about-section fade-in">
        <h2 className="section__title">Languages & Tools</h2>
        <div className="skills">
          <div className="skill">💻 Python</div>
          <div className="skill">⚙️ Java</div>
          <div className="skill">🌐 JavaScript</div>
          <div className="skill">⚡ C#</div>
          <div className="skill">🎮 Unity</div>
          <div className="skill">⚛️ React</div>
          <div className="skill">📊 SQL</div>
          <div className="skill">🧠 AI/ML Basics</div>
        </div>
      </div>

      {/* AWARDS */}
      <div className="about-section fade-in">
        <h2 className="section__title">Awards & Achievements</h2>
        <div className="awards">
          <div className="award">🏅 Grade 8  Honours</div>
          <div className="award">🏆 CCC J1/J2 Perfect Score</div>
          <div className="award">🎖️ Leadership Roles in SAC & MAC</div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="about-section fade-in">
        <h2 className="section__title">Testimonials</h2>
        <div className="testimonials">
          <div className="testimonial"> 
            “Raymond is a creative problem solver who brings great energy to every project.” – Hackathon Teammate
          </div>
          <div className="testimonial">
            “A reliable leader who balances academics, coding, and teamwork.” – Teacher
          </div>
        </div>
      </div>

      {/* HOBBIES */}
      <div className="about-section fade-in">
        <h2 className="section__title">Beyond Coding</h2>
        <ul className="hobbies">
          <li>🏸 Playing badminton & staying active</li>
          <li>🎮 Gaming & exploring new game designs</li>
          <li>🎨 Creating art & digital projects</li>
          <li>📚 Reading novels & learning new concepts</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
