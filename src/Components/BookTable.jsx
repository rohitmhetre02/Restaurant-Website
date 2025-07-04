import React, { useState, useRef } from 'react';
import { FaUser, FaCalendarAlt, FaClock, FaTimes } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import emailjs from 'emailjs-com';
import 'react-datepicker/dist/react-datepicker.css';
import image from '../assets/101.jpg';

function BookTable() {
  const form = useRef();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [popupData, setPopupData] = useState(null);

  const generateBookingID = () => {
    return 'TBL-' + Math.floor(100000 + Math.random() * 900000);
  };

  const sendBooking = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const people = formData.get('people');
    const bookingTime = formData.get('time');
    const bookingDate = date.toLocaleDateString('en-GB'); // dd/mm/yyyy
    const bookingId = generateBookingID();

    formData.append('booking_id', bookingId);
    formData.append('booking_date', bookingDate);

   emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)

      .then((res) => {
        console.log('SUCCESS', res.text);
        setPopupData({
          name,
          people,
          time: bookingTime,
          bookingId,
        });
      })
      .catch((err) => {
        console.error('FAILED', err.text);
        alert('Booking failed, try again.');
      });

    e.target.reset();
  };

  const closePopup = () => {
    setPopupData(null);
  };

  const timeOptions = [];
  for (let hour = 10; hour <= 22; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const hour12 = hour > 12 ? hour - 12 : hour;
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const formatted = `${hour12}:${minute === 0 ? '00' : '30'} ${ampm}`;
      timeOptions.push(formatted);
    }
  }

  return (
    <div
      className="book-table-container"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="form-box">
        <p className="form-subtitle">★ ONLINE RESERVATION</p>
        <h2 className="form-title">Book A Table</h2>
        <p className="form-info">
          Booking request <span className="highlight">+88-123-123456</span> or fill out the order form
        </p>

        <form className="reservation-form" ref={form} onSubmit={sendBooking}>
          <div className="row">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="text" name="phone" placeholder="Phone Number" required />
          </div>

          <div className="row">
            <div className="input-with-icon">
              <FaUser className="input-icon" />
              <select name="people" required>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="4">4 People</option>
                <option value="8">8+ People</option>
              </select>
            </div>

            <div className="input-with-icon">
              <FaCalendarAlt className="input-icon" />
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                name="date"
                dateFormat="dd-MM-yyyy"
                className="datepicker-input"
                required
              />
            </div>

            <div className="input-with-icon">
              <FaClock className="input-icon" />
              <select
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              >
                <option value="">Select Time</option>
                {timeOptions.map((slot, idx) => (
                  <option key={idx} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>

          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">BOOK A TABLE</button>
        </form>
      </div>

      {/* Confirmation Popup */}
      {popupData && (
        <div className="popup-overlay">
          <div className="popup-box">
            <FaTimes className="popup-close" onClick={closePopup} />
            <h3> Booking Confirmed!</h3>
            <p><strong>Name:</strong> {popupData.name}</p>
            <p><strong>Time:</strong> {popupData.time}</p>
            <p><strong>People:</strong> {popupData.people}</p>
            <p><strong>Booking ID:</strong> <span className="highlight">{popupData.bookingId}</span></p>
            <p>Show this ID when you arrive. Thank you!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookTable;
