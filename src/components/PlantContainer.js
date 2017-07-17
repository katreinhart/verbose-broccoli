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
          this.props.plants.map((plant) => {
            return(
            <Card key={plant.id} className="container">
              <CardTitle title={plant.name} subtitle={plant.description} />
              <RaisedButton
                onClick={() => this.props.putPlantInBasket(plant.id)}
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

function mapStateToProps(state) {
  return {
    plants: state.plants
  }
}

export default connect(mapStateToProps, {putPlantInBasket})(PlantContainer)
