// third-party libraries
import axios from 'axios';

// action types
import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  IS_SIGNING_UP,
} from 'store/actions/registerTypes';

/**
 * This is a function which return the IS_SIGNING_UP action
 * @param {none} - mixed parameter types*
 * @return {dictionary}
 * @example
 * foo = () => {}
 */
const signUpRequest = () => ({
  type: IS_SIGNING_UP,
});

/**
 * This is a function which returns the signUPSuccess action
 * @param {dictionary} - A dictionary parameter type*
 * @return {dictionary}
 * @example
 * foo = () => {}
 */
const signUpSuccess = resp => ({
  type: SIGNUP_SUCCESS,
  payload: resp.data.user.token,
});

/**
 * This is a function which returns the signUpFailure action
 * @param {dictionary} - A dictionary parameter type
 * @return {dictionary}
 * @example
 * foo = () => {}
 */
const signUpFailure = error => ({
  type: SIGNUP_ERROR,
  payload: error.response.data.errors,
});

/**
 * This is a function which sends user registration data to the api
 * @param {(string)/3} - multiple strings
 * @return {dictionary}
 * @example
 * foo = (string1, string2, string3) => {}
 */
const registerUserActions = (email, username, password) => (dispatch) => {
  dispatch(signUpRequest());
  /**
  * @type {dictionary}
  */
  const config = {
    headers: { 'Content-Type': 'application/json' },
    responseType: 'json',
  };

  /**
  * @type {dictionary}
  */
  const userDataSend = { user: { email, username, password } };

  return axios.post('https://ah-backend-dojo-dev.herokuapp.com/api/users/', userDataSend, config)
    .then((resp) => {
      dispatch(signUpSuccess(resp));
    }).catch((error) => {
      dispatch(signUpFailure(error));
    });
};

export default registerUserActions;
