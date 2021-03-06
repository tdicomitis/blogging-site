import React from 'react';
import Resume from '../Resume';

const ExperienceContainer = props => (
  <div>
    <div className="resume-intro">
      <h3 className="resume-name"> Taryn Dicomitis </h3>
      <p> Full Stack Web Developer </p>
      <p> Missoula, MT </p>
      <a href="  https://www.linkedin.com/in/taryn-dicomitis-75a57b105/" data-show-count="false">
        <img
          className="linkedin-pic"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
          alt=""
        />
        LinkedIn
      </a>
    </div>
    <Resume />
  </div>
);

export default ExperienceContainer;
