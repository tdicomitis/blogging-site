import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class AboutContainer extends Component {
  render() {
    return (
      <div className="">
        <div className="about-me">
          <h1>About Me</h1>
          <img className="my-pic" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRuuaYUAGXOuV73wC2gykNs_exvgQqdbJo97WfQ9bYJGnh4Q9MvNw" />
          <h5> Contact Information </h5>
            <ul>
              <li> Email: dicomitis13@gmail.com </li>
              <li> Phone: 406-396-6094 </li>
            </ul>
        </div>
        <div>
          <p className="para-about-flex"> hello! this is a bit about me</p>
        </div>
      </div>
    );
  }
}

export default AboutContainer;
