// action types
import { SIGNUP_SUCCESS, SIGNUP_ERROR, IS_SIGNING_UP } from 'store/actions/registerTypes';

/**
  * This is a function.
  * @param {dictionary} - An dictionary param*
  * @return {dictionary}
  * @example
  *      foo({state:{signupSuccess: 'jjhjjh976t8fp9867'}})
  */
const registerReducer = (state = { signupSuccess: '', signupError: { errors: { username: '', email: '', password: '' } }, isSignupSuccessful: false }, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signupSuccess: action.payload,
        isSignupSuccessful: true,
        isSigningUp: false,
        signupError: { errors: { username: '', email: '', password: '' } },
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        signupError: action.payload,
        isSignupSuccessful: false,
        isSigningUp: false,
        signupSuccess: '',
      };

    case IS_SIGNING_UP:
      return {
        ...state,
        isSigningUp: true,
        signupError: { errors: { username: '', email: '', password: '' } },
        signupSuccess: '',
      };

    default:
      return state;
  }
};

export default registerReducer;
