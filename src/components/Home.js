import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import '../css/App.css';
import { Link } from 'react-router-dom'
import { fetchUsername } from '../actions'


class Home extends Component {

  componentDidMount() {
    this.props.fetchUsername()
    // if (!sessionStorage.getItem('jwt')){
    //   this.props.history.push('/login')
    // }
  }

  render() {
    return (
      <div className="Home">
        <h1 className="App-intro">
          Welcome to Audio Advocate, {this.props.username}
        </h1>
        <Link to="/login">Go to login page</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username
  }
}

const mapDispatchToProps = {fetchUsername}

export default connect(mapStateToProps, mapDispatchToProps) (Home)
