import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'

class App extends Component {

  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App
