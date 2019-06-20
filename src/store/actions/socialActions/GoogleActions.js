// third-party libraries
import axios from 'axios';
// action types
import {
  GOOGLE_AUTHENTICATION,
  GOOGLE_AUTH_SUCCESS,
  GOOGLE_AUTH_FAIL
} from 'store/actions/socialTypes';
import loginSuccess from 'store/actions/loginActions';
// utilities
import { isAuthenticated } from 'utils';

/**
 * This is a function which returns the googleSuccess action
 * @param {object} - A object parameter type
 * @return {none}
 * @example
 * foo = () => {}
 */
const googleSuccess = resp => ({
  type: GOOGLE_AUTH_SUCCESS,
  payload: resp.data.user.auth_token,
});

/**
 * This is a function which returns the googleFail action
 * @param {object} - A object parameter type
 * @return {none}
 * @example
 * foo = () => {}
 */
const googleFail = error => ({
  type: GOOGLE_AUTH_FAIL,
  payload: error.response.data.errors,
});

/**
 * This is a function which sends google registration token to the api
 * @param {string} - A string param
 * @return {none}
 * @example
 * foo = (string) => {}
 */
const LoginGoogle = token => (dispatch) => {
  dispatch({
    type: GOOGLE_AUTHENTICATION,
  });
  // @type {object}
  const config = {
    headers: { 'Content-Type': 'application/json' },
    responseType: 'application/json',
  };
  // @type {object}
  const userData = {
    user: {
      auth_token: token
    }
  };
  return axios.post('https://ah-backend-dojo-dev.herokuapp.com/api/auth/google/', userData, config)
    .then((resp) => {
      sessionStorage.setItem('ahToken', resp.data.user.auth_token);
      dispatch(loginSuccess(isAuthenticated()));
      dispatch(googleSuccess(resp));
    }).catch((error) => {
      dispatch(googleFail(error));
    });
};

export default LoginGoogle;
