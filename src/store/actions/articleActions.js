import axios from 'axios';
import { baseURL } from 'utils';
import { GET_ARTICLES, GET_ARTICLES_START, GET_ARTICLES_ERROR } from './types';

// actions
export const getArticlesStart = () => ({ type: GET_ARTICLES_START });
export const getArticles = articles => ({ articles, type: GET_ARTICLES });
export const getArticalsError = error => ({ error, type: GET_ARTICLES_ERROR });

// action creators
export const getAllArticles = () => (dispatch) => {
  const url = `${baseURL}${'/articles/'}`;

  // fetch all articles
  axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(({ data }) => dispatch(getArticles(data.results.articles)))
    .catch(error => dispatch(getArticalsError(error)));
};

// export collection object
const articleActions = {
  getArticles,
  getAllArticles,
};

export default articleActions;
