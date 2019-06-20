import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    ))
    }
  />
);

/**
* This is a function which maps the props to state
* we pick username from state
*/
const mapStateToProps = state => ({
  isAuthenticated: !!state.loginReducer.user.username
});

export default connect(mapStateToProps)(PrivateRoute);
