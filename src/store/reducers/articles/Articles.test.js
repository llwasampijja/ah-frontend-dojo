import articles from './index';
import {
  GET_ARTICLES,
} from '../../actions/types';

const initialSate = {
  articles: [
    {
      id: 1,
      slug: 'this-is-the-second-article',
      title: 'This is the second article',
      body: 'An article second',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna sit amet purus gravida quis blandit turpis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat.',
      author: 'kalsmic',
      publish_status: false,
      createdAt: '2019-05-17T12:56:21.406849Z',
      updatedAt: '2019-05-07T12:56:21.406908Z',
      delete_status: false,
      tagList: [
        'one',
        'two',
      ],
      time_to_read: 2,
      read_stats: {
        views: 0,
        reads: 0,
      },
      likeCount: [
        {
          likes: 0,
          dislikes: 0,
        },
      ],
    },
  ],
};

const generatePayload = type => ({
  type,
  articles: [],
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
});
