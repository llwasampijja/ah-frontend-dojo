// third-party libraries
import axios from 'axios';

// action types
import {
  LIKE_COMMENT_SUCCESS,
  LIKE_COMMENT_FAILURE,
  DISLIKE_COMMENT_SUCCESS,
  DISLIKE_COMMENT_FAILURE,
} from 'store/actions/likeDisLikeCommentTypes';

// utility resources
import { isAuthenticated, baseURL } from 'utils';

/**
 * This is a successful likeComment action creator function
 * @param {none} - mixed parameter types*
 * @return {object {type: ACTION_TYPE}}
 * @example
 * foo = () => {}
 */
const likeCommentSuccess = () => ({
  type: LIKE_COMMENT_SUCCESS,
});

/**
 * This is a unsuccessful likeComment action creator function
 * @param {none} - mixed parameter types*
 * @return {object {type: ACTION_TYPE}}
 * @example
 * foo = () => {}
 */
const likeCommentFailure = () => ({
  type: LIKE_COMMENT_FAILURE,
});

/**
 * This is a successful dislikeComment action creator function
 * @param {none} - mixed parameter types*
 * @return {object {type: ACTION_TYPE}}
 * @example
 * foo = () => {}
 */
const dislikeCommentSuccess = () => ({
  type: DISLIKE_COMMENT_SUCCESS,
});

/**
 * This is a unsuccessful dislikeComment action creator function
 * @param {none} - mixed parameter types*
 * @return {object {type: ACTION_TYPE}}
 * @example
 * foo = () => {}
 */
const dislikeCommentFailure = () => ({
  type: DISLIKE_COMMENT_FAILURE,
});

/**
 * This is a function for liking a specific comment
 * @param {string} [2]
 * @example
 * foo = ('string-1', 4) => {}
 */
export const likeCommentAction = (articleSlug, commentId) => dispatch => (axios({
  method: 'post',
  url: `${baseURL}/articles/${articleSlug}/comments/${commentId}/like`,
  headers: {
    Authorization: `Bearer ${isAuthenticated().token}`
  }
})
  .then(() => {
    dispatch(likeCommentSuccess());
  }).catch(() => {
    dispatch(likeCommentFailure());
  }));

/**
* This is a function for disliking a specific comment
* @param {string} [2]
* @example
* foo = ('string-1', 4) => {}
*/
export const dislikeCommentAction = (articleSlug, commentId) => dispatch => (axios({
  method: 'post',
  url: `${baseURL}/articles/${articleSlug}/comments/${commentId}/dislike`,
  headers: {
    Authorization: `Bearer ${isAuthenticated().token}`
  }
})
  .then(() => {
    dispatch(dislikeCommentSuccess());
  }).catch(() => {
    dispatch(dislikeCommentFailure());
  })
);
