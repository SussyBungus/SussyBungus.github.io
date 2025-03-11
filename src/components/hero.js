import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Welcome Sussies</h1>
        <p className="hero__description">asd</p>
        <a href="#products" className="hero__cta">
          Click
        </a>
      </div>
      <div className="hero__image">
        <img src="/amoung.png" alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
