// action types
import {
  PASSWORD_RESET_START,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAILURE,
  TOKEN_RESET_FAILURE
} from 'store/actions/passwordResetTypes';


const initialState = {
  isLoading: false,
  isPassordResetSuccess: false,
  isPasswordResetError: false,
  passwordErrors: [],
  tokenErrors: [],
};
/**
  * This is a reducer for confirming a user's email address
  * @param {object}
  * @return {object}
  */
const passwordResetReducer = (state = initialState, action) => {
  switch (action.type) {
    case PASSWORD_RESET_START:
      return {
        ...state,
        isLoading: true,
      };

    case PASSWORD_RESET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isPassordResetSuccess: true,
        isPasswordResetError: false,
      };

    case PASSWORD_RESET_FAILURE:
      return {
        ...state,
        isLoading: false,
        isPassordResetSuccess: false,
        isPasswordResetError: true,
        passwordErrors: action.error,
      };

    case TOKEN_RESET_FAILURE:
      return {
        ...state,
        isLoading: false,
        isPassordResetSuccess: false,
        isPasswordResetError: true,
        tokenErrors: action.error,
      };

    default:
      return state;
  }
};

export default passwordResetReducer;
