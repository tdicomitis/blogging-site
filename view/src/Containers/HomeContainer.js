import React from 'react';
import { Link } from 'react-router';
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
      <div>
        <h1>Taryn Dicomitis</h1>
        <h6> Full Stack Javascript Developer </h6>
      </div>
    </div>
    <div className="hire-container">
      <h5>Available For Hire!</h5>
      <Link activeClassName="active-nav-btn" className="nav-item"> Click to Email! </Link>
    </div>
    <div className="skillsandexp-container">
     <Skills />
     <Experience />
    </div>
  </div>

export default HomeContainer;
