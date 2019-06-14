// action types
import {
  CONFIRM_EMAIL_START,
  CONFIRM_EMAIL_SUCCESS,
  CONFIRM_EMAIL_FAILURE
} from 'store/actions/confirmEmailTypes';


const initialState = {
  isLoading: false,
  isConfirmEmailSuccess: false,
  isConfirmEmailError: false,
};
/**
  * This is a reducer for confirming a user's email address
  * @param {object}
  * @return {object}
  */
const confirmEmailReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONFIRM_EMAIL_START:
      return {
        ...state,
        isLoading: true,
      };

    case CONFIRM_EMAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isConfirmEmailSuccess: true,
        isConfirmEmailError: false,
      };

    case CONFIRM_EMAIL_FAILURE:
      return {
        ...state,
        isLoading: false,
        isConfirmEmailSuccess: false,
        isConfirmEmailError: true,
      };

    default:
      return state;
  }
};

export default confirmEmailReducer;
