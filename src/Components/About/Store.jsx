import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import hygienic from '../../assets/hygienic.png';
import ambiance from '../../assets/ambiance.png';
import image1 from '../../assets/101.jpg';
import "../../../public/css/About.css"


function Store() {
   const [isOpen, setIsOpen] = useState(false);
     const navigate = useNavigate();


      const handleBookClick = () => {
    setIsOpen(false);
    navigate('/book');
  };

  return (
    <div className="container-store ">
      <p className="section-title">★ OUR STORY ★</p>

      <h2 className="section-heading">
        Where Exquisite Flavors Meet <span className="highlight">Elegant<br></br></span>{' '}
        <span className="highlight">Ambiance</span> for an{' '}
        <span className="highlight">Unforgettable Fine <br></br>Dining</span> Experience!
      </h2>

      <div className="row">
        <div className="col-6 about-info">
          <p className="info-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
          </p>

          <div className="features-row row">
            <div className='col-6'>
              <div className="feature">
                <img src={hygienic} alt="Hygienic Food" className="icon" />
                <h3>HYGIENIC FOOD</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting dummy text.</p>
              </div>
            </div>
            <div className='col-6'>
              <div className="feature">
                <img src={ambiance} alt="Fresh Ambience" className="icon" />
                <h3>FRESH AMBIENCE</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting dummy text.</p>
              </div>
            </div>
          </div>

          <p className="booking">
            Booking Request : <span className="highlight">+80 (400) 123 4567</span>
          </p>
          <button onClick={handleBookClick} style={{width:"200px"}} className="btn-book">BOOK A TABLE</button>
        </div>

        <div className="col-6 about-image">
          <div className="arched-image">
            <img src={image1} alt="Restaurant Interior" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;
