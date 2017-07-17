import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import { removePlantFromBasket } from '../actions';

const style = {
  minHeight: 100,
  width: 700,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
}

class PlantBasket extends Component {
  render() {
    return(
      <div className="container">
        <h3>Your Basket:</h3>
        {
          this.props.plantBasket.map((plant) => {
            return (
              <Card key={plant.id}>
                <CardTitle title={plant.name} subtitle={plant.description}/>
                <RaisedButton
                  onClick={() => this.props.removePlantFromBasket(plant.id)}
                  label="Remove from basket"
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
  return{
    plantBasket: state.plantBasket
  }
}

export default connect(mapStateToProps, {removePlantFromBasket})(PlantBasket)
