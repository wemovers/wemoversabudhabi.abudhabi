import React from 'react';
import missionImg from '../assets/img/Reliable.jpg';
import '../assets/css/Mission.css'

const Mission = () => {
  return (
    <>  
    <div className="mission-section" id='mission'>
      <div className="mission-container">
        <div className="mission-content">
          <h2>Our Mission Drives Excellence</h2>
          <p>Our mission at We Movers, the professional movers in Abu Dhabi, is to supply secure, reliable, and stress-free moving solutions tailor-made to each customer’s desires. We aim to simplify relocation by presenting professional packing, careful handling, and timely transportation using modern-day systems and a trained team. Customer pleasure, transparency, and great providers are at the center of everything we do.</p>
          <p>We attempt to build <a href='https://www.wemovers.ae/services/long-term-storage' target='_blank' rel='noopener noreferrer' class='clickable-link'>long-term</a> agreements through keeping high service standards, clear communication, and low-cost pricing. Whether it’s a nearby move or a global relocation, our assignment is to ensure every aspect is easy, stable, and completed with care, performance, and a whole peace of mind.</p>
        </div>
        <div className="mission-image">
          <img src={missionImg} alt="Our Mission" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Mission;