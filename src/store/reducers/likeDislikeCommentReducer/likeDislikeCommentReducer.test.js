// action types
import {
  LIKE_COMMENT_SUCCESS,
  LIKE_COMMENT_FAILURE,
  DISLIKE_COMMENT_SUCCESS,
  DISLIKE_COMMENT_FAILURE,
} from 'store/actions/likeDisLikeCommentTypes';

// reducer
import likeDislikeCommentReducer from '.';

describe(' testing LikeDislikeComment reducer', () => {
  it('return undefined state initially', () => {
    expect(likeDislikeCommentReducer(undefined, {})).toEqual({
      isLikingSuccess: false,
      isDislikingSuccess: false
    });
  });

  it('it should return like comment state on success', () => {
    expect(likeDislikeCommentReducer({
      isLikingSuccess: false,
      isDisLikingSuccess: false
    },
    {
      type: LIKE_COMMENT_SUCCESS,
    })).toEqual({
      isLikingSuccess: true,
      isDisLikingSuccess: false
    });
  });

  it('it should return isDisliked true after a successful dislike of a comment', () => {
    expect(likeDislikeCommentReducer({
      isLikingSuccess: false,
      isDisLikingSuccess: false
    },
    {
      type: DISLIKE_COMMENT_SUCCESS,
    })).toEqual({
      isLikingSuccess: false,
      isDisLikingSuccess: true
    });
  });

  it('should return isDisliked false on failure to dislike a comment', () => {
    expect(likeDislikeCommentReducer({
      isLikingSuccess: false,
      isDisLikingSuccess: false,
    },
    {
      type: DISLIKE_COMMENT_FAILURE
    })).toEqual({
      isLikingSuccess: false,
      isDisLikingSuccess: false
    });
  });

  it('should return isLikingSuccess false on failure to like specific comment', () => {
    expect(likeDislikeCommentReducer({
      isLikingSuccess: false,
      isDisLikingSuccess: false,
    },
    {
      type: LIKE_COMMENT_FAILURE
    })).toEqual({
      isLikingSuccess: false,
      isDisLikingSuccess: false,
    });
  });
});
