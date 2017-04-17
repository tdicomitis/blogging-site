import React from 'react';
import { Link } from 'react-router';

const Navbar = props => (
  <nav>
    <div className="navbar-flex">
      <Link to="/home" activeClassName="active-nav-btn" className="nav-item"> Home </Link>
      <Link to="/about" activeClassName="active-nav-btn" className="nav-item"> About Me </Link>
      <Link to="/blog" activeClassName="active-nav-btn" className="nav-item"> Blog </Link>
      <Link to="/experience" activeClassName="active-nav-btn" className="nav-item"> Resume </Link>
      <Link to="/portfolio" activeClassName="active-nav-btn" className="nav-item"> Portfolio </Link>
    </div>
  </nav>
);

export default Navbar;
