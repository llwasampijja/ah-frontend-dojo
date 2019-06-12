// third-party libraries
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// action types
import {
  LIKE_COMMENT_SUCCESS,
  LIKE_COMMENT_FAILURE,
  DISLIKE_COMMENT_SUCCESS,
  DISLIKE_COMMENT_FAILURE,
} from 'store/actions/likeDisLikeCommentTypes';

// actions
import {
  likeCommentAction, dislikeCommentAction,
} from 'store/actions/likeDislikeCommentActions';

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);
const store = mockStore({});

describe('tests the UI functionality of like-dislike comment actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should return success message on successful comment liking', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
      });
    });

    const expectedActions = [
      {
        type: LIKE_COMMENT_SUCCESS,
      },
    ];
    return store.dispatch(likeCommentAction('article-one', 3))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should return failure message on unsuccessful comment liking', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 403,
      });
    });

    const expectedActions = [
      {
        type: LIKE_COMMENT_SUCCESS,
      },
      {
        type: LIKE_COMMENT_FAILURE,
      },
    ];
    return store.dispatch(likeCommentAction('article-one', 3))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it('should return success message on a successful dislike of comment', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
      });
    });
    const expectedActions = [
      {
        type: LIKE_COMMENT_SUCCESS,
      },
      {
        type: LIKE_COMMENT_FAILURE,
      },
      {
        type: DISLIKE_COMMENT_SUCCESS,
      },
    ];
    return store.dispatch(dislikeCommentAction('article-one', 3))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it('should return fail message on an unsuccessful dislike of a comment', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 403,
      });
    });
    const expectedActions = [
      {
        type: LIKE_COMMENT_SUCCESS,
      },
      {
        type: LIKE_COMMENT_FAILURE,
      },
      {
        type: DISLIKE_COMMENT_SUCCESS,
      },
      {
        type: DISLIKE_COMMENT_FAILURE,
      },

    ];

    return store.dispatch(dislikeCommentAction('article-one', 3))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
