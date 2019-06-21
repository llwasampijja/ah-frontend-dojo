import axios from 'axios';
import { isAuthenticated, baseURL } from 'utils';

// import bookmark actions
import {
  TOGGLE_BOOKMARK,
  BOOKMARK_ERROR,
  SET_INITIAL_BOOKMARK_STATUS,
  FETCH_BOOKMARKS,
  REMOVE_BOOKMARK,
} from 'store/actions/bookmarkTypes';


/**
 * Action creator to set the initial bookmark value.
 * @param {int} - article id
 * @return {action} - Action to indicate an article has been bookmarked
 */
const setInitialBookmarkAction = isBookmarked => (
  { type: SET_INITIAL_BOOKMARK_STATUS, isBookmarked }
);

/**
 * Action creator to toggle bookmarking an article.
 * @param {int} - article id
 * @return {action} - Action to indicate an article has been bookmarked
 */
const toggleBookmarkAction = article => ({ type: TOGGLE_BOOKMARK, article });

/**
 * Action creator to log a bookmark toggle error.
 * @param {string} - bookmarking error
 * @return {action} - Action to indicate an article has erred
 */
const bookmarkErrorAction = error => ({ type: BOOKMARK_ERROR, error });

/**
 * Action to add a user's bookmarked articles.
 * @return {action} - Action to add fetched bookmarks
 */
const fetchBookmarksAction = bookmarks => ({ type: FETCH_BOOKMARKS, bookmarks });

/**
 * Action to remove a bookmarked articles.
 * @param {int} - article id
 * @return {action} - Action to remove a bookmark
 */
export const removeBookmarkAction = id => ({ type: REMOVE_BOOKMARK, id });

/**
 * action creator to dispatch toggling of a bookmark.
 * @param { string } - article identifier
 * @return { dispatch } - Action to bookmark an article
 */
export const toggleBookmark = slug => (dispatch) => {
  const url = `${baseURL}${'/articles/'}${slug}${'/bookmark/'}`;
  const headers = {
    headers: {
      Authorization: `Bearer ${isAuthenticated().token}`
    }
  };

  return axios.post(url, null, headers)
    .then(({ data: { message } }) => dispatch(toggleBookmarkAction(message)))
    .catch(({ response: { data: detail } }) => dispatch(bookmarkErrorAction(detail)));
};

/* bookmarks action creator to dispatch fetching of bookmarks.
* @return {dispatch} - Action to bookmark an article
*/
export const fetchBookmarks = () => (dispatch) => {
  const url = `${baseURL}${'/bookmarks/'}`;
  const headers = {
    headers: {
      Authorization: `Bearer ${isAuthenticated().token}`
    }
  };
  return axios.get(url, headers)
    .then(({ data: { bookmarks } }) => dispatch(fetchBookmarksAction(bookmarks)))
    .catch(({ response: { data: detail } }) => dispatch(bookmarkErrorAction(detail)));
};

/**
* action creator to set the initial bookmark status.
* @param { string } - article identifier
* @return { dispatch } - Action to set the initial isBookmarked value
*/
export const setInitialBookmarkStatus = slug => (dispatch) => {
  const url = `${baseURL}${'/articles/'}${slug}${'/bookmark_status/'}`;
  const headers = {
    headers: {
      Authorization: `Bearer ${isAuthenticated().token}`
    }
  };

  return axios.get(url, headers)
    .then(({ data: { isBookmarked } }) => dispatch(setInitialBookmarkAction(isBookmarked)))
    .catch(({ response: detail }) => dispatch(bookmarkErrorAction(detail)));
};

// export collection object
const bookmarkActions = {
  toggleBookmark,
  setInitialBookmarkStatus,
  fetchBookmarks,
  removeBookmarkAction,
};

export default bookmarkActions;
