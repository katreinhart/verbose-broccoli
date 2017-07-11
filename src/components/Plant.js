import React, { Component } from 'react';
import { Card, CardTitle } from 'material-ui/Card';

import Button from './Button';

export default class Plant extends Component {
  render() {
    return(
      <Card className="container">
        <CardTitle title={this.props.name} subtitle="This is the home page." />
        <Button />
      </Card>
    )
  }
}
