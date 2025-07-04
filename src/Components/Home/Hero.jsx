import React, { useEffect, useState } from 'react';
import image1 from '../../assets/101.jpg';
import image2 from '../../assets/102.jpg';
import image3 from '../../assets/103.jpg';
import "../../../public/css/Home.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [image1, image2, image3];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="hero-container">
      <h1 className="title">Delightful Experience</h1>
      <p>
        A taste of perfection in every dish <span>- fine dining with a modern twist.</span>
      </p>

      <div className="image-border">
        <img
          className="img-cover-fit zoom-animation"
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
        />

        <button className="slider-arrow left" onClick={handlePrev}>
          <FaChevronLeft />
        </button>

        <button className="slider-arrow right" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>

      <p>
        <span>VISIT US : </span>Spice Garden Rd, Pune 411001, Maharashtra, India
        &nbsp; | &nbsp;
        <span>WE ARE OPEN :</span> Daily - 8.00 am to 10.00 pm
      </p>
    </div>
  );
}

export default Hero;
