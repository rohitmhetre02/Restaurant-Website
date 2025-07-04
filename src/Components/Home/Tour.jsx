import React from 'react';
import videoFile from '../../assets/tour.mp4';
import "../../../public/css/Home.css"
function Tour() {
  return (
    <div className="tour-wrapper">
      <h2 className="tour-heading">Hotel Tour</h2>
      <div className="tour-section">
        <video
          src={videoFile}
          autoPlay
          loop
          muted
          className="tour-video"
        />
      </div>
    </div>
  );
}

export default Tour;
