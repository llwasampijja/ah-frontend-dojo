// third-party libraries
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
// actionTypes
import {
  FACEBOOK_AUTHENTICATION,
  FACEBOOK_AUTH_SUCCESS,
  FACEBOOK_AUTH_FAIL,
} from 'store/actions/socialTypes';
import { LOGIN_REQUEST } from 'store/actions/loginTypes';
// actions
import LoginFacebook from './FacebookActions';
// Mocked data
import data from '../__mocks__';
// Define a shared constants
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('facebook authentication process', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('logs in successfully', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: data.soicalAuth.success,
      });
    });
    const expectedActions = [
      { type: FACEBOOK_AUTHENTICATION },
      { type: LOGIN_REQUEST, isLoading: true },
      {
        payload: data.soicalAuth.success.user.auth_token,
        type: FACEBOOK_AUTH_SUCCESS,
      }];
    return store.dispatch(LoginFacebook('eyB0eJDiOiJKW1PiKCJ')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('fails to login', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: data.soicalAuth.failure
      });
    });
    const expectedActions = [
      { type: FACEBOOK_AUTHENTICATION },
      {
        payload: data.soicalAuth.failure.errors,
        type: FACEBOOK_AUTH_FAIL,
      }];
    return store.dispatch(LoginFacebook('')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
