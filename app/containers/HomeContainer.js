// @flow
import React, { Component } from 'react';
import { withRouter } from 'mobx-react';
import Home from '../components/Home';
import { observer } from 'mobx-react'

// @withRouter
@observer
export default class HomeContainer extends Component {
  render() {
    return <Home />;
  }
}
