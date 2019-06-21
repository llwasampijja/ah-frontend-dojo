// import bookmark actions
import {
  TOGGLE_BOOKMARK,
  FETCH_BOOKMARKS,
  BOOKMARK_ERROR,
  SET_INITIAL_BOOKMARK_STATUS,
  REMOVE_BOOKMARK,
} from 'store/actions/bookmarkTypes';

import bookmarkReducer from 'store/reducers/bookmarkReducer';

describe('Bookmark Reducer', () => {
  it('should return the initial state', () => {
    const newState = bookmarkReducer(undefined, {});
    expect(newState.isBookmarked).toEqual(false);
    expect(newState.isBookmarkError).toEqual(false);
  });

  it('should bookmark the article', () => {
    const newState = bookmarkReducer(undefined, { type: TOGGLE_BOOKMARK });
    expect(newState.isBookmarked).toEqual(true);
  });

  it('should add fetched bookmarks to the store', () => {
    const newState = bookmarkReducer(undefined, { type: FETCH_BOOKMARKS, bookmarks: [{ id: 1, author: 'bison' }] });
    expect(newState.bookmarks.length).toEqual(1);
  });

  it('should add bookmark errors to the store', () => {
    const newState = bookmarkReducer(undefined, { type: BOOKMARK_ERROR, error: ['Invalid token', 'Invalid slug'] });
    expect(newState.isBookmarkError).toEqual(true);
    expect(newState.bookmarkError.length).toEqual(2);
  });

  it('should set the initialbookmark state to the store', () => {
    const newState = bookmarkReducer(
      undefined, { type: SET_INITIAL_BOOKMARK_STATUS, isBookmarked: true }
    );
    expect(newState.isBookmarked).toEqual(true);
    expect(newState.isBookmarkError).toEqual(false);
    expect(newState.bookmarkError.length).toEqual(0);
  });

  it('should remove the bookmark from the store', () => {
    const newState = bookmarkReducer(
      { bookmarks: [{ id: 1 }] }, { type: REMOVE_BOOKMARK, id: 1 }
    );

    expect(newState.bookmarks.length).toEqual(0);
  });
});
