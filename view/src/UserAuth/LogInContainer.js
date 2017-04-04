import React, {Component} from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router';
import LogInForm from './LogInForm';

class LogInContainer extends Component {
  state = {
    email: null,
    password: null
  }
  updateEmail = (email) => this.setState({ email })

  updatePassword = (password) => this.setState({ password })
  handleSubmit = this.handleSubmit.bind(this)

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    }
    $.ajax({
      url:'/api/login/',
      method: 'POST',
      data: data
    }).done((data) => {
      if (data._id) {
        browserHistory.push('/home')
      } else {
        alert(data.message)
          browserHistory.push('/login')
      }
    })
  }
  render() {
    return(
      <div>
        <h1> Login! </h1>
        <LogInForm updateEmail={this.updateEmail}
          updatePassword={this.updatePassword}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
};

export default LogInContainer;
