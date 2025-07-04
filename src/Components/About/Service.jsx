import React from 'react';
import serviceImg from '../../assets/101.jpg';
import "../../../public/css/About.css"

function Service() {
  return (
    <div className="service-container">
      <p className="subtitle">★ OUR SERVICES ★</p>
      <h2 className="main-title">Perfect Spaces for Every Occasion</h2>

      <div className="service-grid">
        <div className="side-services">
          <div className="service-box">
            <h3>PARTY & CELEBRATIONS</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard.</p>
          </div>
          <div className="service-box">
            <h3>LUXURY FINE DINING</h3>
            <p>Simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard.</p>
          </div>
        </div>

        <div className="service-image-wrapper">
          <div className="arched-image">
            <img src={serviceImg} alt="Celebration" />
          </div>
        </div>

        <div className="side-services">
          <div className="service-box">
            <h3>BANQUET HALL</h3>
            <p>Printing and typesetting industry lorem Ipsum has been a standard dummy text for decades.</p>
          </div>
          <div className="service-box">
            <h3>OUTDOOR CATERING</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
