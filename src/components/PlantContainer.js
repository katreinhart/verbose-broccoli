import React, { Component } from 'react';
import plantList from './data/plants.json';

import Plant from './plant';

export default class PlantContainer extends Component {
  constructor() {
    super();
    this.state = {
      plants: plantList
    }
  }
  render() {
    return(
      <div>
        {
          this.state.plants.map((name, id) => {
            <Plant key={id} name={name} />
          })
        }
      </div>
    )
  }
}
