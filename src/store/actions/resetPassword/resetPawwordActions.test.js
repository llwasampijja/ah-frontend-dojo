import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import resetPassword from 'store/actions/resetPassword';
import {
  PASSWORD_RESET_START,
  PASSWORD_RESET_SUCCESS,
} from 'store/actions/passwordResetTypes';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

const mockData = { status: 'OK' };
const password = 'Pa$$word123';

it('Should reset the password', async () => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve({ data: mockData }));

  const expectedActions = [
    { type: PASSWORD_RESET_START },
    { type: PASSWORD_RESET_SUCCESS },
  ];

  await store.dispatch(resetPassword(password));

  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.post).toHaveBeenCalledTimes(1);
});
