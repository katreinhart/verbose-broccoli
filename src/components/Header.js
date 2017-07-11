import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

export default class Header extends Component {
  render() {
    return (
      <div>
        <AppBar title="Airplant.io"/>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Login</li>
        </ul>
      </div>
    )
  }
}
