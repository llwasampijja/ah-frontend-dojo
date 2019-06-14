// third-party libraries
import axios from 'axios';

// action types
import {
  CONFIRM_EMAIL_START,
  CONFIRM_EMAIL_SUCCESS,
  CONFIRM_EMAIL_FAILURE,

} from 'store/actions/confirmEmailTypes';
import { baseURL } from 'utils';

/**
 * function which returns a start action
 * @return {action}
 */
const confirmEmailStart = () => ({ type: CONFIRM_EMAIL_START });

/**
 * function which returns a success action
 * @return {action}
 */
const confirmEmailSuccess = () => ({ type: CONFIRM_EMAIL_SUCCESS });

/**
 * This is a function which returns the signUpFailure action
 * @param {object} - A dictionary parameter type
 * @return {action}
 */
const confirmEmailFailure = error => ({ type: CONFIRM_EMAIL_FAILURE, error });

/**
 * This is a function which sends user registration data to the api
 * @param {string} - an email address
 * @return {dispatch}
 */
const confirmEmailActions = email => (dispatch) => {
  dispatch(confirmEmailStart());

  const headers = {
    headers: { 'Content-Type': 'application/json' },
    responseType: 'json',
  };
  const data = { email };
  const url = `${baseURL}${'/password_reset/reset_password/'}`;

  return axios.post(url, data, headers)
    .then((response) => { dispatch(confirmEmailSuccess(response)); })
    .catch((error) => { dispatch(confirmEmailFailure(error)); });
};

export default confirmEmailActions;
