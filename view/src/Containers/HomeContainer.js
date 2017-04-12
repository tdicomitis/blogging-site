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
      <h5>Available For Hire!</h5>
      <ul>
        <li> Email: dicomitis13@gmail.com </li>
        <li> Phone: 406-396-6094 </li>
      </ul>
    </div>
    <div className="skillsandexp-container">
     <Skills />
     <Experience />
    </div>
  </div>

export default HomeContainer;
