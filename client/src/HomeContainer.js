import React, { Component } from 'react';
import Paragraph from "./Paragraph";

class HomeContainer extends Component {
  render() {
    return (
      <div className="">
        <div className="my-name-flex">
          <h1>Taryn Dicomitis</h1>
        </div>
        { this.props.children }
        <div className="js-me-flex">
          <h6> Full Stack Javascript Developer </h6>
        </div>
      </div>
    );
  }
}

export default HomeContainer;
