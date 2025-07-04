import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Components/Home/HomePage';
import Footer from './Components/Footer';
import AboutPage from './Components/About/AboutPage'; 
import ContactPage from "./Components/Contact/ContactPage"
import MenuPage from "./Components/Menu/MenuPage"
import BookTable from './Components/BookTable';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book" element={<BookTable />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
