import React from 'react';
import $ from 'jquery';
import LogInForm from './LogInForm';
import {browserHistory} from 'react-router';

var LogInContainer = React.createClass({
  getInitialState: function() {
    return {
      email: null,
      password: null
    }
  },
  updateEmail: function(email){
    return this.setState({ email: email })
  },
  updatePassword: function(password){
    return this.setState({ password: password })
  },
  handleSubmit: function(e) {
    var data = {
      email: this.state.email,
      password: this.state.password,
    };
    $.ajax({
      url:'/api/login',
      method: 'POST',
      data: data
    }).done(function(data){
      browserHistory.push('/blog')
      console.log(data, "SUCCESSFULL LOGIN!")
    })
  },
  render: function() {
    return (
      <div>
        <h1> Login! </h1>
        <LogInForm updateEmail={this.updateEmail}
          updatePassword={this.updatePassword}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
});


export default LogInContainer;
