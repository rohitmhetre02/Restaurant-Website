import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import menu1 from '../../assets/menu1.jpg';
import menu2 from '../../assets/menu2.jpg';
import menu3 from '../../assets/menu3.jpg';
import "../../../public/css/Home.css"
import "../../../public/css/Menu.css"
const appetizers = [
  {
    title: 'Stuffed Mushrooms',
    price: '₹180.00',
    desc: 'Filled with panko, paneer, herbs, sun-dried tomatoes, and Indian spices.',
  },
  {
    title: 'Jalapeño Poppers',
    price: '₹220.00',
    desc: 'Hung curd and cheese filling with a crispy outer layer.',
    tag: 'NEW',
  },
  {
    title: 'Caprese Skewers',
    price: '₹250.00',
    desc: 'Tomatoes, basil, paneer, topped with balsamic glaze.',
  },
  {
    title: 'Greek Salad',
    price: '₹270.00',
    desc: 'Cucumber, olives, onion, tomato, capsicum, paneer.',
    tag: 'NEW',
  },
];

const mains = [
  {
    title: 'Paneer Tikka Masala',
    price: '₹260.00',
    desc: 'Grilled paneer in rich tomato gravy with masala.',
  },
  {
    title: 'Stuffed Eggplant',
    price: '₹320.00',
    desc: 'Baked eggplant filled with masala veggies and cheese.',
    tag: 'NEW',
  },
  {
    title: 'Veg Korma',
    price: '₹240.00',
    desc: 'Mixed vegetables in creamy coconut-cashew curry.',
  },
  {
    title: 'Soya Chaap Masala',
    price: '₹300.00',
    desc: 'Rich North Indian-style chaap curry.',
    tag: 'NEW',
  },
];

const desserts = [
  {
    title: 'Chocolate Mousse',
    price: '₹180.00',
    desc: 'Smooth, rich mousse with chocolate and cream.',
  },
  {
    title: 'Pavlova',
    price: '₹220.00',
    desc: 'Crispy outside, soft inside topped with cream.',
    tag: 'NEW',
  },
  {
    title: 'Apple Crumble',
    price: '₹250.00',
    desc: 'Baked apples with spiced crumble and custard.',
  },
  {
    title: 'Crème Brûlée',
    price: '₹270.00',
    desc: 'Classic custard with caramelized sugar top.',
    tag: 'NEW',
  },
];

const Section = ({ title, items }) => (
  <div className="menu-section">
    <h2>{title}</h2>
    {items.map((item, index) => (
      <div className="menu-item" key={index}>
        <div>
          <h4>
            {item.title} {item.tag && <span className="tag">{item.tag}</span>}
          </h4>
          <p className="desc">{item.desc}</p>
        </div>
        <span className="price">{item.price}</span>
      </div>
    ))}
  </div>
);




function Menu() {
  const [isOpen, setIsOpen] = useState(false);
   const navigate = useNavigate();
  const allSections = [
    { title: 'Appetizers', items: appetizers, image: menu1 },
    { title: 'Main Dishes', items: mains, image: menu2 },
    { title: 'Desserts', items: desserts, image: menu3 },
  ];



   const handleBookClick = () => {
    setIsOpen(false);
    navigate('/menu');
  };

  return (
    <div className="menu-page">
      <h1 className="menu-heading">Our Menu</h1>
      <div className="menu-rows">
        {allSections.map((section, index) => (
          <div
            className={`menu-row ${index % 2 === 0 ? 'row-normal' : 'row-reverse'}`}
            key={index}
          >
            <img src={section.image} className="menu-img" alt={section.title} />
            <Section title={section.title} items={section.items} />
          </div>
        ))}
      </div>
      <button onClick={handleBookClick}  className="more-menu">More Menu</button>
    </div>
  );
}

export default Menu;
