import React from 'react';
import heroImg from '../../assets/101.jpg';
import "../../../public/css/About.css";

function Hero() {
  return (
    <div className="hero-container" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="black-overlay"></div>

      <div className="hero-content">
        <h1>About Us</h1>
        <p>
          A taste of perfection in every dish – <br />
          <span style={{ color: '#E6B15F' }}>fine dining with a modern twist.</span>
        </p>
      </div>
    </div>
  );
}

export default Hero;
