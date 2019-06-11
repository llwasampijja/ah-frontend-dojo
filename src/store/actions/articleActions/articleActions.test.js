import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getAllArticles } from 'store/actions/articleActions';
import { GET_ARTICLES, GET_ARTICLES_START } from '../articleTypes';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

const mockData = { results: { articles: [] } };

it('Should retrieve all articles', async () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: mockData }));

  const expectedActions = [
    { type: GET_ARTICLES_START },
    { type: GET_ARTICLES, articles: [] },
  ];

  await store.dispatch(getAllArticles());

  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
});

it('Should return an error', async () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({ results: mockData }));

  const expectedActionType = GET_ARTICLES_START;

  await store.dispatch(getAllArticles());

  expect(store.getActions()[0].type).toEqual(expectedActionType);
  expect(mockAxios.get).toHaveBeenCalledTimes(2);
});
