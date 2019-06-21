import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from 'pages/Landing';
import PasswordResetPage from 'pages/PasswordReset';
import ProfilePage from 'pages/Profile';
import PageNotFound from 'pages/Error';
import PrivateRoute from 'routers/PrivateRoute';


import 'assets/MainStyle.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={props => <LandingPage {...props} />} />
          <Route path="/reset-password" render={props => <PasswordResetPage {...props} />} />
          <PrivateRoute path="/profile/:profileUser" component={ProfilePage} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}
export default App;
