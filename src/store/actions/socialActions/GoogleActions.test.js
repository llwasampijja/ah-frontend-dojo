// third-party libraries
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
// actionTypes
import {
  GOOGLE_AUTHENTICATION,
  GOOGLE_AUTH_SUCCESS,
  GOOGLE_AUTH_FAIL,
} from 'store/actions/socialTypes';
import { LOGIN_REQUEST } from 'store/actions/loginTypes';
// actions
import LoginGoogle from './GoogleActions';
// Mocked data
import data from '../__mocks__';
// Define shared constants
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('google authentication process', () => {
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
      { type: GOOGLE_AUTHENTICATION },
      { type: LOGIN_REQUEST, isLoading: true },
      {
        payload: data.soicalAuth.success.user.auth_token,
        type: GOOGLE_AUTH_SUCCESS,
      }];
    return store.dispatch(LoginGoogle('eyB0eJDiOiJKW1PiKCJ')).then(() => {
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
      { type: GOOGLE_AUTHENTICATION },
      {
        payload: data.soicalAuth.failure.errors,
        type: GOOGLE_AUTH_FAIL,
      }];
    return store.dispatch(LoginGoogle('')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
