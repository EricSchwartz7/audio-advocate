import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../css/login.css';

class SignUp extends Component {
  render() {
    return (
      <div className="myForm">

          <h1 id="title">Audio Advocate</h1>

          <div id="logIn">
            <h2 className="formTitle">Create Account</h2>
            <form>
              <label>Username: </label>
              <input ref="username" required />
              <label>Email: </label>
              <input type="email" ref="email" required />
              <label>Password: </label>
              <input type="password" ref="password" required />
              <label>Confirm Password: </label>
              <input type="password" ref="passwordConfirmation" required />
              <button className="formButton" type="submit">Create Account</button>
            </form>
            <p id="old">
              Already have an account?&nbsp;
              <Link className="normalLink" to="/login">Log In</Link>
            </p>
          </div>

      </div>
    );
  }
}

export default SignUp;
