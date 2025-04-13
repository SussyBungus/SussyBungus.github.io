import React from "react";
import rayray from "../../assets/rayray.jpg";
import '../../styles/comps/index/hero.css';
import '../../utils/type'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title" id="typewriter">Hi, I'm Raymond Lin!</h1>
        <p className="hero__description">
          Developer. Problem Solver. Innovator.  
          I create <b>engaging experiences</b> through code.
        </p>
        <div className="hero__buttons">
          <a href="#goals" className="hero__cta">View My Goals</a>
          <a href="https://instagram.com/sussy_bungus" className="hero__cta hero__cta--secondary">Contact Me</a>
        </div>
      </div>
      <div className="hero__image">
        <img src={rayray} alt="Raymond Lin" />
      </div>
    </section>
  );
};

export default Hero;
