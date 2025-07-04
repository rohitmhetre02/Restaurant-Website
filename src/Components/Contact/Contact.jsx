import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import contactImg from '../../assets/101.jpg';
import "../../../public/css/Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  emailjs.sendForm(
  import.meta.env.VITE_CONTACT_SERVICE_ID,
  import.meta.env.VITE_CONTACT_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_CONTACT_PUBLIC_KEY
)

    .then((result) => {
        console.log("SUCCESS:", result.text);
        alert('Message Sent Successfully!');
    })
    .catch((error) => {
        console.error("ERROR:", error);
        alert('Failed to send message. Please check console.');
    });

    e.target.reset(); 
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <div className="arched-image">
          <img src={contactImg} alt="Restaurant" />
        </div>
        <h3 className="visit-title">★ VISIT US ★</h3>
        <p className="address">Spice Garden Rd, Pune 411001, Maharashtra, India</p>
        <p className="timing">
          <span className="label">LUNCH TIME –</span> 10.00 am – 3:30 pm <br />
          <span className="label">DINNER TIME –</span> 08.00 pm – 10:30 pm
        </p>
        <p>Booking: +91-123-456789</p>
        <p>Email: booking@gmail.com</p>
      </div>

      <div className="contact-right">
        <h3 className="write-title">★ WRITE TO US ★</h3>
        <h2 className="message-title">Message Us</h2>
        <p className="message-desc">
          Contact us – we aim to reply within 24 hours and are happy to help!
        </p>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="phone" placeholder="Phone Number" required />
          <textarea name="message" rows="4" placeholder="Special Request" required />
          <button type="submit">SEND YOUR MESSAGE</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
