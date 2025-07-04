import React from 'react';


function Map() {
  return (
    <div className="map-container">
      <h2 className="map-title">Find Us Here</h2>
      <iframe
        title="Our Location"
        className="map-frame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1197342603667!2d73.84723481489192!3d18.56016628738744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07a778e6c2b%3A0x7cba39c05c31b55f!2sFC%20Road%2C%20Shivajinagar%2C%20Pune!5e0!3m2!1sen!2sin!4v1670000000000"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
