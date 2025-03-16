import React from "react";
import amoung from "../../assets/sus.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Welcome to the Sussy Zone!</h1>
        <p className="hero__description">
          The gooning villa for all things sus. Goon the fun and lalalal!
        </p>
        <a href="#highlights" className="hero__cta">
          Join the Sussies
        </a>
      </div>
      <div className="hero__image">
        <img src={amoung} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
