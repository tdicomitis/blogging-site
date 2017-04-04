import React from 'react';
import Navbar from './Navbar';

const App = (props) =>
  <div className="container">
    <Navbar />
      { props.children }
  </div>

export default App;
