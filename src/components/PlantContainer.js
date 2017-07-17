import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import plantList from './data/plants.json';
import { putPlantInBasket } from '../actions';

class PlantContainer extends Component {

  render() {
    return(
      <div>
        {
          plantList.map((plant) => {
            return(
            <Card key={plant.id} className="container">
              <CardTitle title={plant.name} subtitle={plant.description} />
              <RaisedButton
                onClick={() => putPlantInBasket(plant.id)}
                label="Add to basket"
              />
            </Card>
          )
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

export default connect(null, {putPlantInBasket})(PlantContainer)
