import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';

import Home from '../../components/Home'

@withRouter
@observer
export default class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Home />
    )
  }
}