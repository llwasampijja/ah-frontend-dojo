import { sampleArticle } from 'utils';
import {
  GET_ARTICLES,
  GET_ARTICLES_START,
  GET_ARTICLES_ERROR,
} from 'store/actions/articleTypes';
import articles from '.';

const initialSate = {
  articles: [
    sampleArticle,
  ],
};

const generatePayload = type => ({
  type,
  articles: [],
  errors: [],
});

describe('Article Reducer', () => {
  it('Should return the initial state', () => {
    const newState = articles(undefined, {});
    expect(newState.articles.length).toEqual(0);
  });

  it('Should return the passed state', () => {
    const newState = articles(initialSate, generatePayload(GET_ARTICLES));
    expect(newState.articles.length).toEqual(0);
  });

  it('Should set fetching to true', () => {
    const newState = articles(initialSate, generatePayload(GET_ARTICLES_START));
    expect(newState.isFetching).toEqual(true);
  });

  it('Should set errors', () => {
    const newState = articles(initialSate, generatePayload(GET_ARTICLES_ERROR));
    expect(newState.errors.length).toEqual(0);
  });
});
