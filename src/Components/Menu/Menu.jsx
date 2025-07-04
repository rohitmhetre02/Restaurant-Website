import React, { useState } from 'react';

import image1 from '../../assets/101.jpg';
import image2 from '../../assets/102.jpg';
import image3 from '../../assets/103.jpg';
import "../../../public/css/Menu.css"

const appetizers = [
  { title: 'Stuffed Mushrooms', price: '₹180.00', desc: 'Filled with panko, paneer, herbs, sun-dried tomatoes, and Indian spices.' },
  { title: 'Jalapeño Poppers', price: '₹220.00', desc: 'Hung curd and cheese filling with a crispy outer layer.', tag: 'NEW' },
  { title: 'Caprese Skewers', price: '₹250.00', desc: 'Tomatoes, basil, paneer, topped with balsamic glaze.' },
  { title: 'Greek Salad', price: '₹270.00', desc: 'Cucumber, olives, onion, tomato, capsicum, paneer.', tag: 'NEW' },
];

const mains = [
  { title: 'Paneer Tikka Masala', price: '₹260.00', desc: 'Grilled paneer in rich tomato gravy with masala.' },
  { title: 'Stuffed Eggplant', price: '₹320.00', desc: 'Baked eggplant filled with masala veggies and cheese.', tag: 'NEW' },
  { title: 'Veg Korma', price: '₹240.00', desc: 'Mixed vegetables in creamy coconut-cashew curry.' },
  { title: 'Soya Chaap Masala', price: '₹300.00', desc: 'Rich North Indian-style chaap curry.', tag: 'NEW' },
];


const desserts = [
  { title: 'Chocolate Mousse', price: '₹180.00', desc: 'Smooth, rich mousse with chocolate and cream.' },
  { title: 'Pavlova', price: '₹220.00', desc: 'Crispy outside, soft inside topped with cream.', tag: 'NEW' },
  { title: 'Apple Crumble', price: '₹250.00', desc: 'Baked apples with spiced crumble and custard.' },
  { title: 'Crème Brûlée', price: '₹270.00', desc: 'Classic custard with caramelized sugar top.', tag: 'NEW' },
];


const soups = [
  { title: 'Tomato Basil Soup', price: '₹120.00', desc: 'Fresh tomato puree with basil and cream.' },
  { title: 'Sweet Corn Soup', price: '₹140.00', desc: 'Creamy sweet corn soup with seasonal vegetables.' },
  { title: 'Hot & Sour Soup', price: '₹150.00', desc: 'Spicy and tangy soup with shredded veggies.', tag: 'NEW' },
  { title: 'Manchow Soup', price: '₹160.00', desc: 'Dark soy-flavored soup with crispy noodles.', tag: 'NEW' },
];

const beverages = [
  { title: 'Masala Chaas', price: '₹60.00', desc: 'Refreshing spiced buttermilk with coriander and jeera.' },
  { title: 'Mango Lassi', price: '₹100.00', desc: 'Chilled yogurt drink blended with mango pulp.' },
  { title: 'Cold Coffee', price: '₹120.00', desc: 'Chilled creamy coffee topped with foam.', tag: 'NEW' },
  { title: 'Fresh Lime Soda', price: '₹80.00', desc: 'Soda with lemon juice, salt or sugar as preferred.' },
];

const breads = [
  { title: 'Tandoori Roti', price: '₹30.00', desc: 'Whole wheat flatbread cooked in clay oven.' },
  { title: 'Butter Naan', price: '₹40.00', desc: 'Soft refined flour naan brushed with butter.' },
  { title: 'Garlic Naan', price: '₹50.00', desc: 'Naan topped with garlic and herbs.', tag: 'NEW' },
  { title: 'Laccha Paratha', price: '₹60.00', desc: 'Multi-layered paratha cooked crisp and golden.' },
];


const Section = ({ title, items }) => (
  <div className="menu-section">
    <h2>{title}</h2>
    {items.map((item, index) => (
      <div className="menu-item" key={index}>
        <div>
          <h4>{item.title} {item.tag && <span className="tag">{item.tag}</span>}</h4>
          <p className="desc">{item.desc}</p>
        </div>
        <span className="price">{item.price}</span>
      </div>
    ))}
  </div>
);

function Menu() {
  const [searchTerm, setSearchTerm] = useState('');

  const allSections = [
    { title: 'Appetizers', items: appetizers, image: image1 },
    { title: 'Main Dishes', items: mains, image: image2 },
    { title: 'Desserts', items: desserts, image: image3 },
    { title: 'soups', items: soups, image: image1 },
    { title: 'beverages', items: beverages, image: image2 },
    { title: 'breads', items: breads, image: image3 },
  ];

  const filteredSections = allSections.map(section => {
    const filteredItems = section.items.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...section, items: filteredItems };
  }).filter(section => section.items.length > 0); 

  return (
    <div className="menu-page">
      <h1 className="menu-heading">Our Menu</h1>

      <div className="menu-search">
        <input
          type="text"
          placeholder="Search any dish or ingredient..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className="menu-rows">
        {filteredSections.length > 0 ? (
          filteredSections.map((section, index) => (
            <div
              className={`menu-row ${index % 2 === 0 ? 'row-normal' : 'row-reverse'}`}
              key={index}
            >
              <img src={section.image} className="menu-img" alt={section.title} />
              <Section title={section.title} items={section.items} />
            </div>
          ))
        ) : (
          <p className="no-results">No items matched your search.</p>
        )}
      </div>
    </div>
  );
}

export default Menu;
