import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import ModalModalExample from './LoginModal';

class Nav extends Component {

  goToLogin() {
    this.props.history.push('/login')
  }

  goToHome() {
    this.props.history.push('/')
  }

  render() {
    return(
      <div className="Nav">
        <nav>
          <h1 id="title" onClick={this.goToHome.bind(this)}>Audio Advocate</h1>
          {/* <Button className="navButton" onClick={this.goToLogin.bind(this)}>Login</Button> */}
          <ModalModalExample />
        </nav>
      </div>
    )
  }
}

export default Nav
