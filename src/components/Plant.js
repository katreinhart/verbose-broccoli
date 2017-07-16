import React, { Component } from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { connect} from 'react-redux';

import { putPlantInBasket } from '../actions';
import Button from './Button';

class Plant extends Component {
  render() {
    return(
      <Card className="container">
        <CardTitle title={this.props.name} subtitle={this.props.description} />
        <RaisedButton
          onClick={() => this.props.putPlantInBasket(this.props.plantID)}
          label="Add to basket"
        />
      </Card>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps, { putPlantInBasket })(Plant);
