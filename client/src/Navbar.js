import React from 'react';
import { Link } from 'react-router';

var Navbar = React.createClass({
  render: function(){
    return(
      <nav className="main-nav">
        <div className="navbar-flex">
          <Link to="/home" activeClassName="active-nav-btn-flex" className="nav-item"> Home </Link>
          <Link to="/about" activeClassName="active-nav-btn-flex" className="nav-item"> About Me </Link>
          <Link to="/blog" activeClassName="active-nav-btn-flex" className="nav-item"> Blog </Link>
          <Link to="/experience" activeClassName="active-nav-btn-flex" className="nav-item"> Experience </Link>
        </div>
      </nav>
    )
  }
});

export default Navbar;
