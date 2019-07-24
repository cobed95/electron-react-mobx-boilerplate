import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';

import Counter from '../../components/Counter'

@withRouter
@observer
export default class CounterPaqe extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Counter />
    )
  }
}