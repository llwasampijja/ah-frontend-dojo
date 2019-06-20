// action types
import {
  FACEBOOK_AUTHENTICATION,
  FACEBOOK_AUTH_SUCCESS,
  FACEBOOK_AUTH_FAIL,
} from 'store/actions/socialTypes';

/**
  * This is a function which sets the initial state of the facebook reducer
  * @param {object} - A object param
  * @return {object}
  * @example
  *      foo({state:{FacebookToken: null, isAuthenticating: false, isFacebookLoggedIn: false}})
  */
const initialState = {
  FacebookToken: null,
  isAuthenticating: false,
  isFacebookLoggedIn: false,
};

/**
  * This is a function which sets the state of the facebook reducer to the store
  * @param {object} - A object param
  * @return {object}
  * @example
  *      foo({state:{FacebookToken: null, isAuthenticating: false, isFacebookLoggedIn: false}})
  */
const facebookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FACEBOOK_AUTHENTICATION:
      return {
        ...state,
        isAuthenticating: true,
        isFacebookLoggedIn: false,
      };
    case FACEBOOK_AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        isFacebookLoggedIn: true,
        FacebookToken: action.payload,
      };
    case FACEBOOK_AUTH_FAIL:
      return {
        ...state,
        isAuthenticating: false,
        isFacebookLoggedIn: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default facebookReducer;
