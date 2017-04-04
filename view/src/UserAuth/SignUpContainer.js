import React, {Component} from 'react';
import $ from 'jquery';
import SignUpForm from './SignUpForm';
import {browserHistory} from 'react-router';

class SignUpContainer extends Component {
  state = {
    email: null,
    password: null
  }
  updateEmail = (email) => this.setState({ email })

  updatePassword = (password) => this.setState({ password })
  handleSubmit = this.handleSubmit.bind(this)

  handleSubmit(e) {
    e.preventDefault()
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    $.ajax({
      url:'/api/signup',
      method: 'POST',
      data: data
    }).done((data) => {
      if(data._id) {
        browserHistory.push('/home')
      } else {
        alert(data.message)
        browserHistory.push('/signup')
      }
    })
  }
  render() {
    return(
      <div>
        <h1> Sign Up! </h1>
        <SignUpForm updateEmail={this.updateEmail}
                    updatePassword={this.updatePassword}
                    handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}



export default SignUpContainer;
