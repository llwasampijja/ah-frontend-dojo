import {
  GET_ARTICLES,
  GET_ARTICLES_START,
  GET_ARTICLES_ERROR,
} from '../../actions/types';

const initialState = {
  fetching: false,
  articles: [],
  errors: [],
};

const articles = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return Object.assign({}, state,
        {
          fetching: false,
          articles: action.articles,
        });

    case GET_ARTICLES_START:
      return Object.assign({}, state, { fetching: true });

    case GET_ARTICLES_ERROR:
      return Object.assign({}, state,
        {
          fetching: false,
          errors: action.errors,
        });

    default:
      return state;
  }
};

export default articles;
