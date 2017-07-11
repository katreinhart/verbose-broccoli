import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './header';

import PlantContainer from './PlantContainer';

import './styles.scss';

export default class App extends Component {
  render() {
    return(
      <MuiThemeProvider>
        <div>
          <Header />
          <h2>Welcome to Airplant.io!</h2>
          <PlantContainer />
        </div>

      </MuiThemeProvider>
    )
  }
}
