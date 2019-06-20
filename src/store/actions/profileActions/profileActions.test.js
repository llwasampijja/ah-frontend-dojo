// import third party libraries
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'utils/mainAxios';
import moxios from 'moxios';
import profileData from 'store/actions/__mocks__/profile';

// import action types
import {
  GET_PROFILE_ERROR,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
} from '../types';

//  import actions
import {
  fetchUserProfile,
  fetchUserProfileError,
  fetchProfileRequest,
  updateProfileRequest,
} from './index';

// initial state object
const initialState = {
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


const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

const profile = {
  firstname: 'fieldmarshal',
  lastname: 'nadralia',
  bio: 'This is my biodata information',
  image: 'http://fieldmarshal.jpg',
};


describe('actions', () => {
  beforeEach(() => {
    moxios.install(axios);
  });
  afterEach(() => {
    moxios.uninstall(axios);
  });

  it('should create an action to fetch user profile info', () => {
    const expectedAction = {
      type: GET_PROFILE_SUCCESS,
      profile,
    };
    expect(fetchUserProfile(profile)).toEqual(expectedAction);
  });

  it('should create an error action if it fails to fetch user profile', () => {
    const error = '';
    const expectedAction = {
      type: GET_PROFILE_ERROR,
      error,
    };
    expect(fetchUserProfileError(error)).toEqual(expectedAction);
  });

  it('should fail with an unknown id', () => {
    const error = {
      message: 'fetch user profile unsuccessful',
      status: 'error',
    };
    const username = 'fieldmarshal007';
    axios.get = jest.fn().mockReturnValue(Promise.reject(error));

    const expectedActions = [
      {
        type: 'GET_PROFILE_ERROR',
        error,
      },
    ];
    const store = mockStore(initialState);
    return store.dispatch(fetchProfileRequest(username)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should fetch a user profile successfully', () => {
    const dataProfile = {
      type: GET_PROFILE_SUCCESS,
      profile: {
        firstname: 'nadralia',
        lastname: 'fieldmarshal',
        username: 'fieldmarshal',
        email: 'dfieldmarshal@ah.com',
        bio: '',
        image: 'http://fieldmarshal.jpg',
      },
    };
    axios.get = jest.fn().mockReturnValue(Promise.resolve({ data: dataProfile }));

    const username = 'fieldmarshal';
    const expectedActions = [{
      type: GET_PROFILE_SUCCESS,
      profile: {
        firstname: 'nadralia',
        lastname: 'fieldmarshal',
        username: 'fieldmarshal',
        email: 'dfieldmarshal@ah.com',
        bio: '',
        image: 'http://fieldmarshal.jpg',
      },
    }];
    const store = mockStore(initialState);
    return store.dispatch(fetchProfileRequest(username)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should update user profile successfully', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: profileData.update.success,
      });
    });
    const dataProfile = {
      profile: {
        firstname: 'nadralia',
        lastname: 'fieldmarshal',
        username: 'fieldmarshal',
        email: 'dfieldmarshal@ah.com',
        bio: '',
        image: 'http://fieldmarshal.jpg',
      },
    };
    const expectedActions = [{
      type: UPDATE_PROFILE_SUCCESS,
      profile: {
        firstname: 'nadralia',
        lastname: 'fieldmarshal',
        username: 'fieldmarshal',
        email: 'dfieldmarshal@ah.com',
        bio: '',
        image: 'http://fieldmarshal.jpg',
      },
    }];
    return store.dispatch(updateProfileRequest(dataProfile, 'nadralia'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
