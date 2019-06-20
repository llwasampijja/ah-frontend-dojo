// action types
import {
  GOOGLE_AUTHENTICATION,
  GOOGLE_AUTH_SUCCESS,
  GOOGLE_AUTH_FAIL,
} from 'store/actions/socialTypes';

/**
  * This is a function which sets the initial state of the google reducer
  * @param {object} - A object param
  * @return {object}
  * @example
  *      foo({state:{GoogleToken: null, isAuthenticating: false, isGoogleLoggedIn: false}})
  */
const initialState = {
  GoogleToken: null,
  isAuthenticating: false,
  isGoogleLoggedIn: false,
};

/**
  * This is a function which sets the state of the google reducer to the store
  * @param {object} - A object param
  * @return {object}
  * @example
  *      foo({state:{GoogleToken: null, isAuthenticating: false, isGoogleLoggedIn: false}})
  */
const googleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOOGLE_AUTHENTICATION:
      return {
        ...state,
        isAuthenticating: true,
        isGoogleLoggedIn: false,
      };
    case GOOGLE_AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        isGoogleLoggedIn: true,
        GoogleToken: action.payload,
      };
    case GOOGLE_AUTH_FAIL:
      return {
        ...state,
        isAuthenticating: false,
        isGoogleLoggedIn: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default googleReducer;
