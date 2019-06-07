import React from 'react';
import { shallow } from 'enzyme';
import ArticlePreview from './index';


const setUpArticlePreview = () => {
  const article = {
    id: 2,
    slug: 'this-is-the-second-article-67gl',
    title: 'This is the second article',
    body: 'An article second',
    description: 'two os fonle',
    author: 'andela',
    publish_status: false,
    createdAt: '2019-05-17T12:56:29.444403Z',
    updatedAt: '2019-05-17T12:56:29.444469Z',
    delete_status: false,
    tagList: [
      'one',
      'two',
    ],
    time_to_read: 1,
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
  };

  const component = shallow(
    <ArticlePreview
      article={article}
    />,
  );
  return component;
};

describe('Article Preview Component', () => {
  it('Should contain an article class', () => {
    const component = setUpArticlePreview();
    const wrapper = component.find('.article-preview');
    expect(wrapper.length).toBe(1);
  });

  it('Should render an article__image class', () => {
    const component = setUpArticlePreview();
    const wrapper = component.find('.article-preview__image');
    expect(wrapper.length).toBe(1);
  });

  it('Should render an article__title class', () => {
    const component = setUpArticlePreview();
    const wrapper = component.find('.article-preview__title');
    expect(wrapper.length).toBe(1);
  });

  it('Should render an article__sample class', () => {
    const component = setUpArticlePreview();
    const wrapper = component.find('.article-preview__sample');
    expect(wrapper.length).toBe(1);
  });

  it('Should render an article__footer class', () => {
    const component = setUpArticlePreview();
    const wrapper = component.find('.article-preview__footer');
    expect(wrapper.length).toBe(1);
  });

  it('Should render an article__author class', () => {
    const component = setUpArticlePreview();
    const wrapper = component.find('.article-preview__footer__author');
    expect(wrapper.length).toBe(1);
  });

  it('Should render an article__date class', () => {
    const component = setUpArticlePreview();
    const wrapper = component.find('.article-preview__footer__date');
    expect(wrapper.length).toBe(1);
  });
});
