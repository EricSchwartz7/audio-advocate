import React, { Component } from 'react';
import { Button, Icon, Menu } from 'semantic-ui-react'

class Nav extends Component {

  goToLogin() {
    this.props.history.push('/login')
  }

  render() {
    return(
      <div className="Nav">
        <nav>
          <h1 id="title">Audio Advocate</h1>
          <Button animated className="navButton" onClick={this.goToLogin.bind(this)}>
            <Button.Content visible>Login</Button.Content>
            <Button.Content hidden>
              <Icon name='right arrow' />
            </Button.Content>
          </Button>
        </nav>
      </div>
    )
  }
}

export default Nav
