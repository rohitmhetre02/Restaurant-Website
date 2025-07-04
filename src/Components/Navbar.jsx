import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import "../../public/css/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleBookClick = () => {
    setIsOpen(false);
    navigate('/book');
  };

  return (
    <nav className="navbar p-2">
      <div className="container-fluid flex items-center justify-between">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Logo" />
        </Link>

        <div className="hamburger-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={28} color="#E6B15F" /> : <FaBars size={28} color="#E6B15F" />}
        </div>

        <div className={`menu ${isOpen ? 'show' : ''}`}>
          <MenuItem to="/" label="Home" toggleMenu={toggleMenu} />
          <MenuItem to="/menu" label="Menu" toggleMenu={toggleMenu} />
          <MenuItem to="/about" label="About Us" toggleMenu={toggleMenu} />
          <MenuItem to="/contact" label="Contact" toggleMenu={toggleMenu} />
          <button className="btn-book mobile-btn" onClick={handleBookClick}>Book A Table</button>
        </div>

        <button onClick={handleBookClick} className="btn-book desktop-btn">Book A Table</button>
      </div>
    </nav>
  );
}

const MenuItem = ({ to, label, toggleMenu }) => (
  <Link to={to} onClick={toggleMenu}>{label}</Link>
);

export default Navbar;
