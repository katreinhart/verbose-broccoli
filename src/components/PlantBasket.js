import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';

import Plant from './Plant';

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
      <Paper style={style} zDepth={3}>
        <h3>Your Basket:</h3>
        {
          this.props.plantBasket.map((plant) => {
            return <Plant key={plant.id} name={plant.name} />
          })
        }
      </Paper>
    )
  }
}

function mapStateToProps(state) {
  return{
    plantBasket: state.plantBasket
  }
}

export default connect(mapStateToProps, {})(PlantBasket)
