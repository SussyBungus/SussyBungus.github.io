import React from "react";
import amoung from "../assets/amoung.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Welcome to the Sussy Zone!</h1>
        <p className="hero__description">
          The ultimate destination for all things sus. Join the fun and embrace the chaos!
        </p>
        <a href="#products" className="hero__cta">
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
