import React from 'react';
import logo from '../assets/logo.png';
import image1 from '../assets/101.jpg';
import image2 from '../assets/102.jpg';
import "../../public/css/Footer.css"
import { FaInstagram, FaWhatsapp, FaLinkedin, FaArrowUp } from 'react-icons/fa';

function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <div className="footer-container">
            <img src={image1} alt="left decor" className="footer-decor left" />
            <img src={image2} alt="right decor" className="footer-decor right" />

            <div className="footer-content">
                <img src={logo} alt="Logo" className="footer-logo" />

                <div className="footer-info">
                    <h4>Visit Us</h4>
                    <p>
                        Spice Garden Rd,Pune 411001, Maharashtra, India<br />
                        Daily - 8.00 am to 10.00 pm<br />
                        booking@gmail.com<br />
                        Booking Request : +88-123-123456
                    </p>
                </div>

                <div className="footer-newsletter">
                    <h4>Our Newsletter</h4>
                    <p>Subscribe us & Get 25% Off. Get latest updates.</p>
                    <div className="newsletter-input">
                        <input type="email" placeholder="Your email" />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-wrapper">
                <hr className="footer-line" />
                <div className="footer-bottom">
                    <p>© 2025 Restoria. All rights reserved.</p>

                    <div className="footer-socials">
                        <FaInstagram className="icon" />
                        <FaWhatsapp className="icon" />
                        <FaLinkedin className="icon" />
                    </div>

                    <div className="footer-top-arrow" onClick={scrollToTop}>
                        <FaArrowUp />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
