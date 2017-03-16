import React from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router';
import LogInForm from './LogInForm';

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
    e.preventDefault()
    var data = {
      email: this.state.email,
      password: this.state.password,
    };
    $.ajax({
      url:'/api/login',
      method: 'POST',
      data: data
    }).done(function(data){
      console.log(data, "DATA RESPONSE FROM ATTEMPT TO LOGIN!")
      if (data._id) {
        browserHistory.push('/home')
      } else {
        alert(data.message)
          browserHistory.push('/login')
      }
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
