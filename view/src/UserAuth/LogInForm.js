import React from 'react';
import { Link } from 'react-router';

const LogInForm = (props) =>
  <div>
    <form onSubmit={props.handleSubmit}>
      <div>
        <label>Email</label>
        <input onChange={ (event) => props.updateEmail(event.target.value)} type="email" className=""/>
      </div>
      <div>
        <label>Password</label>
        <input onChange={ (event) => props.updatePassword(event.target.value)} type="password" className=""/>
      </div>
      <button type="submit" className="btn btn-default">Login!</button>
      <Link to="/signup" activeClassName="active-nav-btn" className="nav-item"> Sign Up </Link>
    </form>
  </div>

export default LogInForm;
