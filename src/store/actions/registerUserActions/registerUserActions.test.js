import registerUserActions from 'store/actions/registerUserActions';
import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  IS_SIGNING_UP,
} from 'store/actions/registerTypes';
import data from 'store/actions/__mocks__';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

/**
 * This is a function.
 * test registerUser actions
 */
describe('actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('it should return a token on successful registration', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: data.register.userData,
      });
    });
    const expectedActions = [
      {
        type: IS_SIGNING_UP,
      },
      {
        type: SIGNUP_SUCCESS,
      },
    ];
    return store.dispatch(registerUserActions('lamech@bolon.com', 'lamech', 'Password#1'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should return the correct state on signup error', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: data.register.signupError,
      });
    });
    const expectedActions = [
      {
        type: IS_SIGNING_UP,
      },
      {
        type: SIGNUP_ERROR,
      },
    ];
    return store.dispatch(registerUserActions('lamech@bolon.com', 'lamech', 'Password#1'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
