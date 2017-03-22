import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import '../css/login.css';
import { createUser } from '../actions'

class SignUp extends Component {

  handleSubmit(event) {
    event.preventDefault()
    const username = this.refs.username.value
    const email = this.refs.email.value
    const password = this.refs.password.value
    const passwordConfirmation = this.refs.passwordConfirmation.value

    if (username !== "" && email !== "" && password !== "" && passwordConfirmation !== "") {
      const user = {username: username, email: email, password: password, password_confirmation: passwordConfirmation}
      this.props.createUser(user)
    }
  }

  componentDidUpdate() {
    if (Object.keys(this.props.user).length !== 0) {
      this.props.history.push('/home')
    }
  }

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
              <button className="formButton" type="submit" onClick={this.handleSubmit.bind(this)}>Create Account</button>
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
    router: state.router
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({createUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (SignUp)
