import React from 'react';
import $ from 'jquery';
import SignUpForm from './SignUpForm';
import {browserHistory} from 'react-router';

var SignUpContainer = React.createClass({
  getInitialState: function() {
    return {
      email: null,
      password: null
    }
  },
  updateEmail: function(email) {
    return this.setState({ email: email });
  },
  updatePassword: function(password) {
    return this.setState({ password: password });
  },
  handleSubmit: function(e) {
    var data = {
      email: this.state.email,
      password: this.state.password,
    };
    $.ajax({
      url:'/api/signup',
      method: 'POST',
      data: data
    }).done(function(data){
      browserHistory.push('/blog')
      console.log(data, "SUCCESSFULL SIGNED UP!")
    })
  },
  render: function() {
    return (
      <div>
        <h1> Sign Up! </h1>
        <SignUpForm updateEmail={this.updateEmail}
          updatePassword={this.updatePassword}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
});

export default SignUpContainer;
