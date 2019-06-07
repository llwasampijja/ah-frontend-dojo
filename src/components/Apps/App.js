import React, { Component } from 'react';
// import Routes from 'pages/Route';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from 'components/Login';
import LandingPage from 'pages/Landing';
import PageNotFound from 'pages/Error';

import 'assets/MainStyle.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={props => <LandingPage {...props} />} />
          <Route path="/login" component={Login} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}
export default App;
