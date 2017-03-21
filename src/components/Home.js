import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import { Link } from 'react-router-dom'

class Home extends Component {

  render() {
    return (
      <div className="Home">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Audio Advocate</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/login">Go to login page</Link>
      </div>
    );
  }
}

export default Home
