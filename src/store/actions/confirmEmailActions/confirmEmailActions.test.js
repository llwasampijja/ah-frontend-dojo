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
const store = mockStore();

const mockData = { status: 'OK' };
const email = 'bisonlou@gmail.com';

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
