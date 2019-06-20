// import action types
import {
  GET_PROFILE_ERROR,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  UPDATE_PROFILE_SUCCESS,
} from 'store/actions/types';

// initial state object
export const initialState = {
  profile: {
    firstname: '',
    lastname: '',
    bio: '',
    image: '',
    email: '',
    username: '',
  },
  error: {},
  isLoading: true,
};

/**
  * This is a switch function for our profile reducer.
  * @param {Object} - initialState*
  * @return {object} - action
  * @example
  *
  */

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        profile: action.profile,
      });
    case GET_PROFILE_ERROR:
    case UPDATE_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        profile: action.profile,
      });
    case UPDATE_PROFILE_ERROR:
    default:
      return state;
  }
};

export default profileReducer;
