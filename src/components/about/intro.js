import React from "react";
import profileImg from "../../assets/sus.jpg";
import '../../styles/comps/about/intro.css';

const About = () => {
  return (
    <div>
      {/* Intro Section */}
      <section className="intro">
        <div className="intro-content">
          <h1>Hey, I'm Raymond Lin 👋</h1>
          <h2>Aspiring Developer | Problem-Solver | Gamer</h2>
          <p>
            I love coding, playing badminton, and working on cool projects.  
            Currently developing <b>Drift and Relax</b> in Unity while  
            sharpening my problem-solving skills!
          </p>
          <div className="intro-buttons">
            <a href="#abilities" className="button">See What I Do</a>
            <a href="#creations" className="button button-outline">Check My Work</a>
          </div>
        </div>
        <img src={profileImg} alt="Raymond Lin" className="intro-image" />
      </section>

      {/* Abilities Section */}
      <section className="abilities" id="abilities">
        <h2>What I Love Doing</h2>
        <p>
          Whether it's coding, gaming, or sports, I enjoy learning and improving.  
          Here are some things I’m passionate about:
        </p>
        <div className="abilities-grid">
          <div className="card">🎮 Game Development</div>
          <div className="card">💻 Coding & Problem-Solving</div>
          <div className="card">🏸 Badminton</div>
          <div className="card">🍜 Food & Chill</div>
          <div className="card">📚 Learning New Tech</div>
          <div className="card">✏️ Creative Thinking</div>
        </div>
      </section>

      {/* Creations Section */}
      <section className="creations" id="creations">
        <h2>Projects I'm Working On</h2>
        <p>
          Here are some of my projects that I’ve been actively building.
        </p>
        <div className="creations-grid">
          <div className="item">
            <h3>🚗 Drift and Relax</h3>
            <p>A relaxing mobile drifting game built in Unity.</p>
            <a href="#" className="button button-outline">Learn More</a>
          </div>
          <div className="item">
            <h3>🔢 CCC Training</h3>
            <p>Practicing problem-solving to master the CCC challenge!</p>
          </div>
          <div className="item">
            <h3>🌐 Personal Website</h3>
            <p>Building my own site with React.js and cool UI designs.</p>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="fun-facts">
        <h2>Some Fun Facts About Me</h2>
        <ul>
          <li>⚡ I enjoy speedrunning coding challenges!</li>
          <li>🍣 Sushi is my ultimate go-to food.</li>
          <li>🎵 I listen to music while coding for max focus.</li>
          <li>🕹️ I love strategy games and competitive play.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
