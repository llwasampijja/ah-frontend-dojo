// third party libraries
import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// thunks
import resetPassword from 'store/actions/resetPassword';
import {
  PASSWORD_RESET_START,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAILURE,
  TOKEN_RESET_FAILURE,
} from 'store/actions/passwordResetTypes';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;

const mockData = { status: 'OK' };
const password = 'Pa$$word123';

beforeEach(() => {
  store = mockStore();
  jest.clearAllMocks();
});

it('Should reset the password', async () => {
  mockAxios.post.mockResolvedValue({ data: mockData });

  const expectedActions = [
    { type: PASSWORD_RESET_START },
    { type: PASSWORD_RESET_SUCCESS },
  ];

  await store.dispatch(resetPassword(password));

  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.post).toHaveBeenCalledTimes(1);
});

it('Should dispatch the password error action on failure', async () => {
  mockAxios.post.mockRejectedValue({ response: { data: { errors: { password: [] } } } });

  const expectedActions = [
    { type: PASSWORD_RESET_START },
    { type: PASSWORD_RESET_FAILURE, error: [] },
  ];

  await store.dispatch(resetPassword(password));

  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.post).toHaveBeenCalledTimes(1);
});

it('Should dispatch the token error action on failure', async () => {
  mockAxios.post.mockRejectedValue({ response: { data: { error: 'Invalid token' } } });

  const expectedActions = [
    { type: PASSWORD_RESET_START },
    { type: TOKEN_RESET_FAILURE, error: ['Invalid token'] },
  ];

  await store.dispatch(resetPassword(password));

  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.post).toHaveBeenCalledTimes(1);
});
