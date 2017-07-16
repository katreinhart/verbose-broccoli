import React, { Component } from 'react';
import { connect } from 'react-redux';

import plantList from './data/plants.json';

import Plant from './plant';

class PlantContainer extends Component {

  render() {
    return(
      <div>
        {
          plantList.map((plant) => {
            console.log("Plant " + plant.name + " has ID " + plant.id);
            return(<Plant
              key={plant.id}
              name={plant.name}
              plantID={plant.id}
            />)
          })
        }
      </div>
    )
  }
}
//
// function mapStateToProps(state) {
//   return {
//     state
//   }
// }

export default connect()(PlantContainer)
