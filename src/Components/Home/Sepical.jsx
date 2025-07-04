
import React, { useState, useEffect } from 'react';

import dish1 from '../../assets/101.jpg';
import dish2 from '../../assets/102.jpg';
import dish3 from '../../assets/103.jpg';
import dish4 from '../../assets/101.jpg';
import dish5 from '../../assets/103.jpg';
import dish6 from '../../assets/102.jpg';
import "../../../public/css/Home.css"

const specials = [
  {
    title: 'GREEK SALAD',
    type: 'DESSERTS',
    desc: 'Panko bread crumbs, pine nuts, parsley, sun-dried tomatoes.',
    price: '$39.00',
    img: dish1,
  },
  {
    title: 'TOKUSEN WAGYU',
    type: 'APPETIZER',
    desc: 'Bell pepper, olives, cucumber, crab red onion.',
    price: '$45.00',
    img: dish2,
  },
  {
    title: 'BUTTERNUT PUMPKIN',
    type: 'MAIN DISH',
    desc: 'Veggies, cheeses, tomato sauce, big flavors.',
    price: '$15.00',
    img: dish3,
  },
  {
    title: 'MANGO STICKY RICE',
    type: 'DESSERTS',
    desc: 'Sweet mango with coconut sticky rice.',
    price: '$30.00',
    img: dish4,
  },
  {
    title: 'TANDOORI PANEER',
    type: 'APPETIZER',
    desc: 'Paneer grilled with spices and yogurt.',
    price: '$36.00',
    img: dish5,
  },
  {
    title: 'CHEDDAR SOUP',
    type: 'MAIN DISH',
    desc: 'Cheddar, broccoli, herbs, and bread crumbs.',
    price: '$20.00',
    img: dish6,
  },
];

function Special() {
  const [start, setStart] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, []);


  const getThreeItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(specials[(start + i) % specials.length]);
    }
    return items;
  };

  const nextSlide = () => {
    setStart((prev) => (prev + 1) % specials.length);
  };

  const prevSlide = () => {
    setStart((prev) =>
      (prev - 1 + specials.length) % specials.length
    );
  };

  return (
    <div className="special-carousel">
      <h2 className="carousel-title">Special Dishes</h2>
      <div className="carousel-wrapper">
        <button className="arrow left" onClick={prevSlide}>
          &#8592;
        </button>

        <div className="carousel-track">
          {getThreeItems().map((dish, index) => (
            <div className="carousel-card" key={index}>
              <p className="dish-type">{dish.type}</p>
              <img src={dish.img} alt={dish.title} className="dish-img" />
              <h3>{dish.title}</h3>
              <p className="dish-desc">{dish.desc}</p>
              <p className="dish-price">{dish.price}</p>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={nextSlide}>
          &#8594;
        </button>
      </div>

    </div>
  );
}

export default Special;
