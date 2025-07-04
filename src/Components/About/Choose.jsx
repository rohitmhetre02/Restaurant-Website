import React from 'react';
import chef from '../../assets/101.jpg';
import food from '../../assets/102.jpg';
import ambience from '../../assets/103.jpg';
import recipe from '../../assets/101.jpg';
import "../../../public/css/About.css"

function Choose() {
  return (
    <div className="choose-container">
      <p className="subtitle">★ WHY CHOOSE US ★</p>
      <h2 className="main-title">Why Dine With Us</h2>

      <div className="features-row">
        {[
          { img: chef, title: 'SKILLED CHEF' },
          { img: food, title: 'HYGIENIC FOOD' },
          { img: ambience, title: 'FRESH AMBIENCE' },
          { img: recipe, title: 'SECRET RECIPE' },
        ].map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="arch-img">
              <img src={item.img} alt={item.title} />
            </div>
            <p className="feature-title">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="stats-row">
        <div className="stat-box">
          <h3>60+</h3>
          <p className="stat-label">MONTHLY VISITORS</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been.</p>
        </div>
        <div className="stat-box">
          <h3>22+</h3>
          <p className="stat-label highlight">POSITIVE REVIEWS</p>
          <p>Simply dummy text of the printing and typesetting industry lorem Ipsum has been.</p>
        </div>
        <div className="stat-box">
          <h3>135+</h3>
          <p className="stat-label highlight">SECRET RECIPES</p>
          <p>Simply dummy text of the printing and typesetting lorem Ipsum has been industry.</p>
        </div>
        <div className="stat-box">
          <h3>10+</h3>
          <p className="stat-label highlight">AWARDS & HONORS</p>
          <p>Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum.</p>
        </div>
      </div>
    </div>
  );
}

export default Choose;
