import React from 'react';
import Skills from '../HomeSkills';
import Experience from '../HomeExperience';

const HomeContainer = (props) =>
  <div>
    <div className="home-flex-container">
      <div>
        <img className="cute-pic"
          src="https://freeiconshop.com/wp-content/uploads/edd/code-flat.png"
          alt="presentation"
        />
      </div>
      <div className="intro-to-me">
        <h1>Taryn Dicomitis</h1>
        <h6>Full Stack Javascript Developer</h6>
      </div>
    </div>
    <div className="hire-container">
      <div className="av-for-hire">
        <h4>Available For Hire!</h4>
      </div>
      <div>
        <p><img className="email-icon" src="https://cdn1.iconfinder.com/data/icons/simple-icons/2048/email-2048-black.png" alt=""/>dicomitis13@gmail.com</p>
        <p><img className="phone-icon" src="http://www.valledelcocora.com.co/img/iconos/fijo-n.png" alt=""/>406-396-6094</p>
      </div>
    </div>
    <div className="skillsandexp-container">
     <Skills />
     <Experience />
    </div>
  </div>

export default HomeContainer;
