import { getArticles } from 'store/actions/articleActions';
import { GET_ARTICLES } from 'store/actions/types';

describe('actions', () => {
  it('should create an action to fetch articles', () => {
    const articles = { articles: [] };
    const expectedAction = {
      type: GET_ARTICLES,
      articles,
    };

    expect(getArticles(articles)).toEqual(expectedAction);
  });
});
