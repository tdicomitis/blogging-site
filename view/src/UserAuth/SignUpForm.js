import React from 'react';

const SignUpForm = (props) =>
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
      <button type="submit" className="btn btn-default">Sign Up!</button>
    </form>
  </div>

export default SignUpForm;
