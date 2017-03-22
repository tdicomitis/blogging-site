import React from 'react';
import { Link } from 'react-router';

var Navbar = React.createClass({
  render: function(){
    return(
      <nav className="">
        <div className="navbar-flex">
          <Link to="/home" activeClassName="active-nav-btn" className="nav-item"> Home </Link>
          <Link to="/about" activeClassName="active-nav-btn" className="nav-item"> About Me </Link>
          <Link to="/blog" activeClassName="active-nav-btn" className="nav-item"> Blog </Link>
          <Link to="/experience" activeClassName="active-nav-btn" className="nav-item"> Experience </Link>
          <Link to="/portfolio" activeClassName="active-nav-btn" className="nav-item"> Portfolio </Link>
        </div>
      </nav>
    )
  }
});

export default Navbar;
