import React from 'react';

var SignUpForm = React.createClass({
  render: function() {
    return(
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <div>
            <label>Email</label>
            <input onChange={ (event) => this.props.updateEmail(event.target.value)} type="email" className=""/>
          </div>
          <div>
            <label>Password</label>
            <input onChange={ (event) => this.props.updatePassword(event.target.value)} type="password" className=""/>
          </div>
          <button type="submit" className="btn btn-default">Sign Up!</button>
        </form>
      </div>
    )
  }
});

export default SignUpForm;
