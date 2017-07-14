import React, { Component } from 'react';
import { connect } from 'react-redux';

import plantList from './data/plants.json';

import Plant from './plant';

class PlantContainer extends Component {

  render() {
    return(
      <div>
        {
          plantList.map((plant, id) => {
            console.log("plant " + plant.name);
            return(<Plant key={id} name={plant.name} description={plant.description}/>)
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps)(PlantContainer)
