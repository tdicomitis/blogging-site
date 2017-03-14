import React, { Component } from 'react';
import { Link } from 'react-router';

class BlogContainer extends Component {
  render() {
    return (
      <div className="">
        <div className="head-title-flex">
          <h1>Welcome to my Blog!</h1>
        </div>
        <div>
          <Link to="/post" activeClassName="active-nav-btn-flex" className="nav-item"> Post a Blog </Link>
        </div>
      </div>
    );
  }
}

export default BlogContainer;
