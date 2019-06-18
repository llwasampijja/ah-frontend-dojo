// third-party libraries
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// action types
import {
  PASSWORD_RESET_START,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAILURE,
  TOKEN_RESET_FAILURE,

} from 'store/actions/passwordResetTypes';
import { baseURL } from 'utils';

const successMsg = 'Password successfuly reset. You can now login';
/**
 * function which returns a start action
 * @return {action}
 */
const passwordResetStart = () => ({ type: PASSWORD_RESET_START });

/**
 * function which returns a success action
 * @return {action}
 */
const passwordResetSuccess = () => ({ type: PASSWORD_RESET_SUCCESS });

/**
 * This is a function which returns the a password error action
 * @param {object} - A dictionary parameter type
 * @return {action}
 */
const passwordResetFailure = error => ({ type: PASSWORD_RESET_FAILURE, error });

/**
 * This is a function which returns a token error action
 * @param {object} - A dictionary parameter type
 * @return {action}
 */
const tokenResetFailure = error => ({ type: TOKEN_RESET_FAILURE, error });

/**
 * This is a function which sends user registration data to the api
 * @param {string} - an email address
 * @return {dispatch}
 */
const resetPassword = (newPassword, token) => (dispatch) => {
  dispatch(passwordResetStart());

  const headers = {
    headers: { 'Content-Type': 'application/json' },
    responseType: 'json',
  };
  const payload = { password: newPassword };
  const url = `${baseURL}${'/reset-password/'}${token}`;

  return axios.post(url, payload, headers)
    .then((response) => {
      toast.success(successMsg);
      return dispatch(passwordResetSuccess(response));
    })
    .catch(({ response: { data } }) => {
      if (data.errors !== undefined) {
        const { errors: { password } } = data;
        return dispatch(passwordResetFailure(password));
      }
      return dispatch(tokenResetFailure([data.error]));
    });
};

export default resetPassword;
