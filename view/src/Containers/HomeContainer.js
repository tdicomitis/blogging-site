import React from 'react';
import Skills from '../HomeSkills';
import Experience from '../HomeExperience';
import HomePageInfo from '../HomePageInfo';

const HomeContainer = props => (
  <div className="home-cont">
    <HomePageInfo />
    <div className="skillsandexp-container">
      <Skills />
      <Experience />
    </div>
  </div>
);

export default HomeContainer;
