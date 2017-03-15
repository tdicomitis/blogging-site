import React from 'react';

var HomeContainer = React.createClass({
  render() {
    return (
      <div className="home-flex-container">
        <div>
          <img className="cute-pic"
            src="https://freeiconshop.com/wp-content/uploads/edd/code-flat.png" alt="presentation"
          />
        </div>
        <div className="">
          <h1>Taryn Dicomitis</h1>
          <h6> Full Stack Javascript Developer </h6>
        </div>
      </div>
    );
  }
});

export default HomeContainer;
