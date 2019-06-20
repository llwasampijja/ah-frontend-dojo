import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import confirmEmailActions from 'store/actions/confirmEmailActions';
import {
  CONFIRM_EMAIL_START,
  CONFIRM_EMAIL_SUCCESS,
  CONFIRM_EMAIL_FAILURE,

} from 'store/actions/confirmEmailTypes';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;

const mockData = { status: 'OK' };
const email = 'bisonlou@gmail.com';

beforeEach(() => {
  store = mockStore();
  jest.clearAllMocks();
});

it('Should send an email', async () => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve({ data: mockData }));

  const expectedActions = [
    { type: CONFIRM_EMAIL_START },
    { type: CONFIRM_EMAIL_SUCCESS },
  ];

  await store.dispatch(confirmEmailActions(email));

  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.post).toHaveBeenCalledTimes(1);
});

it('Should send an email', async () => {
  mockAxios.post.mockRejectedValueOnce();

  const expectedActions = [
    { type: CONFIRM_EMAIL_START },
    { type: CONFIRM_EMAIL_FAILURE, error: undefined },
  ];

  await store.dispatch(confirmEmailActions(email));

  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.post).toHaveBeenCalledTimes(1);
});
