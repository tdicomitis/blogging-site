import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class HomeContainer extends Component {
  render() {
    return (
      <div className="">
        <div className="">
          <h2>Welcome to Home Container</h2>
        </div>
        { this.props.children }
      </div>
    );
  }
}

export default HomeContainer;
