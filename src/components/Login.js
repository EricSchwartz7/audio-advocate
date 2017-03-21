import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../css/login.css';

class Login extends Component {
  render() {
    return (
      <div className="myForm">

        <h1 id="title">Audio Advocate</h1>

        <div id="logIn">
          <h2 className="formTitle">Log In</h2>
          <form>
            <label>Email: </label>
            <input ref="logInEmail" />
            <label>Password: </label>
            <input type="password" ref="logInPassword" />
            <Link to="#" className="formButton" type="submit">Log In</Link>
          </form>
          <div id="newDiv">
            <p id="new">New to Audio Advocate?</p>
          </div>
          <Link to="/signup" className="formButton createButton">Create Account</Link>
        </div>

      </div>
    );
  }
}

export default Login;
