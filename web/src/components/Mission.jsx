import React from 'react';
import missionImg from '../assets/img/Reliable.jpg';
import '../assets/css/Mission.css'

const Mission = () => {
  return (
    <>  
    <div className="mission-section" id='mission'>
      <div className="mission-container">
        <div className="mission-content">
          <h2>Our Mission, Your Easy Move</h2>
          <p>
            At Sea Freight Household Items, our undertaking is to make your passage simple, secure, and stress-free. We appreciate how crucial your family gadgets are, and we deal with them with care and recognition. Our purpose is to provide you peace of mind via managing everything from careful packing to secure sea freight transport.<br/><br/> We trust that transferring to a brand-new area has to be an exciting adventure, not a worrying one. That's why we work hard every day to make your relocation clean and smooth. With Seacraft Household objects, <a href='https://www.wemovers.ae/services/freight-forwarding-services' className='clickable-link'>freight forwarding</a> companies in Dubai, your flow is in safe hands from start to finish.</p>
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