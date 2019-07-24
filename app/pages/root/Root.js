// @flow
import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  withRouter
} from 'react-router-dom';
import { observer } from 'mobx-react';

import routes from '../../constants/routes';
import HomePage from '../home/HomePage';
import CounterPage from '../counter/CounterPage';

export default class Root extends Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}

class Routes extends Component {
  render() {
    return (
      <div style={{ flex: 1 }}>
        <Switch>
          <Route path={routes.HOME} exact component={HomePage} />
          <Route path={routes.COUNTER} exact component={CounterPage} />
        </Switch>
      </div>
    );
  }
}

