import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './header';
import Plant from './plant';

import './styles.scss';

export default class App extends Component {
  render() {
    return(
      <MuiThemeProvider>
        <div>
          <Header />
          <h2>Hello React!</h2>
          <Plant name="Peace Lily" />
          <Plant name="Philodendron" />
        </div>

      </MuiThemeProvider>
    )
  }
}
