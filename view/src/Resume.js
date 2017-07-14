import React from 'react';

const Resume = (props) =>
  <div>
      <h2 className="resume-header">Experience</h2>
    <div>
      <h4 className="company-name"> Big Sky Code Acacemy</h4>
      <p> Missoula, MT </p>
      <p> Feb 2017-May 2017</p>
    </div>
    <div>
      <h4 className="company-name"> Sweetgreen </h4>
      <p> Boston, MA </p>
      <p> Sept 2015-Aug 2016 </p>
      <p> Building and maintaining relationships with influencers such as universities
        and work force centers. Responsible for hiring for the seven Boston locations.
        Leading interviews as well as communicating with Head Coaches on a weekly basis
        for hiring needs. Conducting field recruiting events and informational presentations
        to improve candidate awareness.</p>
    </div>

    <div className="Skills">
      <h2>Skill Summary</h2>
      <div className="skills-summary">
        <div className="skills">
          <h4 className="skill-title">Front-End</h4>
          <ul>
            <li>HTML5 / CSS3 </li>
            <li>Javascript</li>
            <li>React</li>
            <li>jQuery</li>
          </ul>
        </div>
        <div className="skills">
          <h4 className="skill-title">Back-End</h4>
            <ul>
              <li>Mongo</li>
              <li>Chai</li>
              <li>Mocha</li>
              <li>jQuery</li>
            </ul>
        </div>
        <div className="skills">
          <h4 className="skill-title">General</h4>
            <ul>
              <li>Customer Service</li>
              <li>Javascript</li>
              <li>jQuery</li>
              <li> jQuery </li>
            </ul>
        </div>
      </div>
    </div>

    <div>
      <h2 className="resume-header">Education</h2>
    </div>
    <div>
      <h4 className="company-name"> Big Sky Code Acacemy</h4>
      <p> Missoula, MT </p>
      <p> Feb 2017-May 2017</p>
      <p>Currently completing an intensive 12-week full stack web development boot camp
      to gain proficiency in relational and non-relational databases, JavaSctipt, jQuery,
      HTML, CSS, Git, and Software Dev Methods. Participatd in group projects as well as individual work. </p>
    </div>
    <div>
      <h4 className="company-name"> Montana State University</h4>
      <p> Bachelors of Science in Applied Psychology </p>
      <p> Graduated Dec 2014 </p>
      <p> Bozeman, MT </p>
    </div>
  </div>


export default Resume;
