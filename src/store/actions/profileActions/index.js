// third party libraries
import { toast } from 'react-toastify';

// import axios instance
import axios from 'utils/mainAxios';

// import action types
import {
  GET_PROFILE_ERROR,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  UPDATE_PROFILE_SUCCESS,
} from 'store/actions/types';

/**
* Fetch user profile action function on success
* @param {object} profile
*/
export const fetchUserProfile = profile => ({
  type: GET_PROFILE_SUCCESS,
  profile,
});

/**
* Fetch user profile action function on failure
* @param {string} error
*/
export const fetchUserProfileError = error => ({
  type: GET_PROFILE_ERROR,
  error,
});

/**
* update user profile action function on success
* @param {object} profile
*/
export const updateUserProfile = profile => ({
  type: UPDATE_PROFILE_SUCCESS,
  profile,
});

/**
* Fetch user profile action function on failure
* @param {string} error
*/
export const updateUserProfileError = error => ({
  type: UPDATE_PROFILE_ERROR,
  error,
});


/**
* action creator function for fetch profile request that takes
* username as a parameter and dispatch as a function
* @param {string} username
*/
export const fetchProfileRequest = username => dispatch => axios
  .get(`/profiles/${username}`)
  .then(response => dispatch(fetchUserProfile(response.data.profile)))
  .catch(error => dispatch(fetchUserProfileError(error)));

/**
* action creator for update profile request that takes in profile object and username
* as parameters and dispatch as a function
* @param {string} username
* @param {object} profile user info
* using the put method of http we upload user info
*/
export const updateProfileRequest = (profile, username) => dispatch => axios
  .put(`/profiles/${username}`, profile)
  .then((response) => {
    if (response.status === 200) {
      toast.success('Profile successfully updated');
      return dispatch(updateUserProfile(response.data.profile));
    }
    return dispatch(updateUserProfileError(response.data.message));
  })
  .catch(error => error.response);
