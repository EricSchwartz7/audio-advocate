import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import '../css/login.css';

class Login extends Component {

  handleClick() {
    // this.props.history.push("/home")
  }

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
            <button className="formButton" type="submit">Log In</button>
          </form>
          <div id="newDiv">
            <p id="new">New to Audio Advocate?</p>
          </div>
          <button className="formButton createButton">Create Account</button>
        </div>

        <h1 onClick={this.handleClick.bind(this)}>Go to Home Page</h1>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Login)
