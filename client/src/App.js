import React, { Component } from 'react';
import Navbar from './Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
           { this.props.children }
      </div>
    );
  }
}

export default App;
