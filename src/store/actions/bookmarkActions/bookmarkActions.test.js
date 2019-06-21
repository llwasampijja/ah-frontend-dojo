import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { toggleBookmark, setInitialBookmarkStatus, fetchBookmarks } from 'store/actions/bookmarkActions';
import {
  TOGGLE_BOOKMARK,
  FETCH_BOOKMARKS,
  BOOKMARK_ERROR,
  SET_INITIAL_BOOKMARK_STATUS,
} from 'store/actions/bookmarkTypes';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;

beforeEach(() => {
  store = mockStore();
  jest.clearAllMocks();
});

it('dispatch the toggle action on success', async () => {
  mockAxios.post.mockResolvedValue({ data: { data: { message: 'bookmarked' } } });

  const expectedActions = [
    { type: TOGGLE_BOOKMARK },
  ];

  await store.dispatch(toggleBookmark('building-world-class-features'));
  expect(store.getActions()).toEqual(expectedActions);
});

it('should dispatch the error action on failure', async () => {
  mockAxios.post.mockRejectedValueOnce({ response: { data: { detail: 'Authentication credentials were not provided' } } });

  const expectedActions = [
    { type: BOOKMARK_ERROR, error: { detail: 'Authentication credentials were not provided' } }
  ];

  await store.dispatch(toggleBookmark('building-world-class-features'));
  expect(store.getActions()).toEqual(expectedActions);
});

it('should dispatch the set-initial-bookmark-value action on success', async () => {
  mockAxios.get.mockResolvedValueOnce({ data: { isBookmarked: true } });

  const expectedActions = [
    { type: SET_INITIAL_BOOKMARK_STATUS, isBookmarked: true }
  ];

  await store.dispatch(setInitialBookmarkStatus('building-world-class-features'));
  expect(store.getActions()).toEqual(expectedActions);
});

it('should dispatch the error action on failue', async () => {
  mockAxios.get.mockRejectedValueOnce({ response: { detail: 'Not found.' } });

  const expectedActions = [
    { type: BOOKMARK_ERROR, error: { detail: 'Not found.' } }
  ];

  await store.dispatch(setInitialBookmarkStatus('building-world-class-feature'));
  expect(store.getActions()).toEqual(expectedActions);
});

it('should dispatch the fetch bookmarks action on successfuly fetching bookmarks', async () => {
  mockAxios.get.mockResolvedValue({ data: { bookmarks: [] } });

  const expectedActions = [
    { type: FETCH_BOOKMARKS, bookmarks: [] }
  ];

  await store.dispatch(fetchBookmarks());
  expect(store.getActions()).toEqual(expectedActions);
});

it('should dispatch an error action on failing to fetch bookmarks', async () => {
  mockAxios.get.mockRejectedValueOnce({ response: { data: { detail: 'Authorisation failed' } } });

  const expectedActions = [
    { type: BOOKMARK_ERROR, error: { detail: 'Authorisation failed' } }
  ];

  await store.dispatch(fetchBookmarks());
  expect(store.getActions()).toEqual(expectedActions);
});
