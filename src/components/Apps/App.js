import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from 'pages/Landing';
import PasswordResetPage from 'pages/PasswordReset';
import ProfilePage from 'pages/Profile';
import PageNotFound from 'pages/Error';
import PrivateRoute from 'routers/PrivateRoute';


import 'assets/MainStyle.scss';
import Comment from 'components/Comment';
import LikeDislikeComment from 'components/LikeDislikeComment';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={props => <LandingPage {...props} />} />
          <Route path="/comments" render={props => <Comment {...props} articleSlug="javascript-code" />} />
          <Route path="/reset-password" render={props => <PasswordResetPage {...props} />} />
          <PrivateRoute path="/profile/:profileUser" component={ProfilePage} />
          <Route path="/like" render={props => <LikeDislikeComment articleSlug="article-to-test-like-comment-feature" commentId={16} {...props} />} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}
export default App;
