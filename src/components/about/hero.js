import React from "react";
import profileImg from "../../assets/sus.jpg";
import '../../styles/comps/about/hero.css';

const AboutMe = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h1 className="about-heading">Hey, I'm Raymond Lin</h1>
          <p className="about-paragraph">
            I'm a student passionate about coding, badminton, and problem-solving. 
            Whether it's creating projects in Unity, tackling competitive programming problems, 
            or just learning something new, I love the challenge. 
          </p>
          <p className="about-paragraph">
            When I'm not coding, you can probably find me playing badminton, watching novels, or just enjoying some good food and sleep.  
          </p>
        </div>
        <div className="about-image">
          <img src= {profileImg} alt="Raymond Lin" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;