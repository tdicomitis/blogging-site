import React from 'react';
import { Link } from 'react-router';

var Navbar = React.createClass({
  render: function(){
    return(
      <nav className="main-nav">
        <div className="navbar-flex">
            <div>
              <img className="cat-meow" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsEmlXfa_XrnoOxmFkK1b1KcTlJSDQk4S8cOYwRUGJ9pS7bUrGHA" />
            </div>
            <div className="flex-nav-items">
              <Link to="/home" activeClassName="active-nav-btn" className="nav-item"> HOME </Link>
              <Link to="/about" activeClassName="active-nav-btn" className="nav-item"> ABOUT </Link>
              <Link to="/blog" activeClassName="active-nav-btn" className="nav-item"> BLOG </Link>
            </div>
          </div>
        </nav>
    )
  }
});

export default Navbar;
