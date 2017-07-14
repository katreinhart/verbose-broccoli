import React, { Component } from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { connect} from 'react-redux';

import { putPlantInBasket } from '../actions';
import Button from './Button';

class Plant extends Component {

  addPlantToBasket() {
    console.log("Add " + this.props.name + " to shopping basket");
    putPlantInBasket(this.props.id);
  }
  render() {
    return(
      <Card className="container">
        <CardTitle title={this.props.name} subtitle={this.props.description} />
        <RaisedButton
          onClick={() => this.addPlantToBasket(this.props.id)}
          label="Add to basket"
        />
      </Card>
    )
  }
}

function mapStateToProps(state) {
  return {
    plantBasket: state.plantBasket
  }
}

export default connect(mapStateToProps, { putPlantInBasket })(Plant);
