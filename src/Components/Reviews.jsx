import React from 'react';
import "../../public/css/Review.css"

function Reviews() {
  const testimonials = [
    {
      name: 'Priya S.',
      review:
        'Absolutely loved the food and ambiance! The Veg Thali was fresh, flavorful, and perfectly spiced. Will definitely visit again!',
      rating: 5,
    },
    {
      name: 'Rahul M.',
      review:
        'A pure vegetarian delight! The service was friendly and fast, and the herbal drinks were refreshing. Highly recommended.',
      rating: 4,
    },
    {
      name: 'Anjali D.',
      review:
        'Best experience I\'ve had in a long time. Everything from starters to dessert was delicious. 5 stars!',
      rating: 5,
    },
    {
      name: 'Suresh P.',
      review:
        'The atmosphere is peaceful, the staff is courteous, and the food is truly satisfying. Highly recommended for families!',
      rating: 5,
    },
    {
      name: 'Meena T.',
      review:
        'A wonderful experience. Very neat, hygienic, and the desserts were the highlight for me!',
      rating: 4,
    },
    {
      name: 'Aarav K.',
      review:
        'One of the best vegetarian spots in town. Herbal drinks are a must-try!',
      rating: 5,
    },
  ];

  const renderStars = (count) => {
    return '★'.repeat(count) + '☆'.repeat(5 - count);
  };

  return (
    <div className="reviews-section">
      <p style={{color:"#e6b15f"}}>★ Reviews ★</p>
      <h2 className="reviews-title">Happy Testimonials</h2>
      <div className="review-slider">
        <div className="review-track">
          {testimonials.map((item, index) => (
            <div key={index} className="review-card">
              <p className="review-text">“{item.review}”</p>
              <p className="review-name">– {item.name}</p>
              <p className="review-stars">{renderStars(item.rating)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
