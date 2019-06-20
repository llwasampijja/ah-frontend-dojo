// third-party libraries
import axios from 'axios';
// action types
import {
  FACEBOOK_AUTHENTICATION,
  FACEBOOK_AUTH_SUCCESS,
  FACEBOOK_AUTH_FAIL
} from 'store/actions/socialTypes';
import loginSuccess from 'store/actions/loginActions';
// utilities
import { isAuthenticated } from 'utils';

/**
 * This is a function which returns the facebookSuccess action
 * @param {object} - A object parameter type*
 * @return {none}
 * @example
 * foo = () => {}
 */
const facebookSuccess = resp => ({
  type: FACEBOOK_AUTH_SUCCESS,
  payload: resp.data.user.auth_token
});

/**
 * This is a function which returns the facebookFail action
 * @param {object} - A object parameter type*
 * @return {none}
 * @example
 * foo = () => {}
 */
const facebookFail = error => ({
  type: FACEBOOK_AUTH_FAIL,
  payload: error.response.data.errors
});

/**
 * This is a function which sends facebook registration token to the api
 * @param {string} - A string param
 * @return {none}
 * @example
 * foo = (string) => {}
 */
const LoginFacebook = token => (dispatch) => {
  dispatch({
    type: FACEBOOK_AUTHENTICATION
  });
  // @type {object}
  const config = {
    headers: { 'Content-Type': 'application/json' },
    responseType: 'application/json'
  };
  // @type {object}
  const userData = {
    user: {
      auth_token: token
    }
  };
  return axios
    .post(
      'https://ah-backend-dojo-dev.herokuapp.com/api/auth/facebook/',
      userData,
      config
    )
    .then((resp) => {
      sessionStorage.setItem('ahToken', resp.data.user.auth_token);
      dispatch(loginSuccess(isAuthenticated()));
      dispatch(facebookSuccess(resp));
    })
    .catch((error) => {
      dispatch(facebookFail(error));
    });
};

export default LoginFacebook;
