import React from 'react';
import Navbar from './Navbar';

var App = React.createClass ({
  render: function() {
    return (
      <div className="container">
        <Navbar />
           { this.props.children }
      </div>
    )
  }
});

export default App;
