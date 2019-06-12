// action types
import {
  LIKE_COMMENT_FAILURE,
  DISLIKE_COMMENT_FAILURE,
  LIKE_COMMENT_SUCCESS,
  DISLIKE_COMMENT_SUCCESS,
} from 'store/actions/likeDisLikeCommentTypes';

/**
  * This is a function which adds state for the likedDislikeComponent to the store
  * @param {object {state: statevalues}, string} - An dictionary param*
  * @return {object {state: statevalues}}
  * @example
  *      foo({state:{isliked: true, isDisliked: false}})
  */
const likeDislikeCommentReducer = (
  state = { isLikingSuccess: false, isDislikingSuccess: false, }, action
) => {
  switch (action.type) {
    case LIKE_COMMENT_SUCCESS:
      return {
        ...state,
        isLikingSuccess: true,
      };

    case DISLIKE_COMMENT_SUCCESS:
      return {
        ...state,
        isDisLikingSuccess: true,
      };

    case LIKE_COMMENT_FAILURE || DISLIKE_COMMENT_FAILURE:
      return {
        ...state,
        isLikingSuccess: false,
        isDisLikingSuccess: false,
      };

    default:
      return state;
  }
};

export default likeDislikeCommentReducer;
