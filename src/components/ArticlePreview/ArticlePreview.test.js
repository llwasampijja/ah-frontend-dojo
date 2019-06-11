
// react libraries
import React from 'react';

// third-party libraries
import { mockArticle, shouldContainClass, shouldContainText } from 'utils';

// components
import ArticlePreview from './index';


const article = (title, description) => mockArticle(title, description);

describe('Article Preview Component', () => {
  it('Should contain an article class', () => {
    shouldContainClass(<ArticlePreview
      article={article()}
    />, '.article-preview');
  });

  it('Should render an article__image class', () => {
    shouldContainClass(<ArticlePreview
      article={article()}
    />, '.article-preview__image');
  });

  it('Should render an article__title class', () => {
    shouldContainClass(<ArticlePreview
      article={article()}
    />, '.article-preview__title');
  });

  it('Should render an article__sample class', () => {
    shouldContainClass(<ArticlePreview
      article={article()}
    />, '.article-preview__sample');
  });

  it('Should render an article__footer class', () => {
    shouldContainClass(<ArticlePreview
      article={article()}
    />, '.article-preview__footer');
  });

  it('Should render an article__author class', () => {
    shouldContainClass(<ArticlePreview
      article={article()}
    />, '.article-preview__footer__author');
  });

  it('Should render an article__date class', () => {
    shouldContainClass(<ArticlePreview
      article={article()}
    />, '.article-preview__footer__date');
  });

  it('Should render a title without the trailing 3 dots', () => {
    shouldContainText(<ArticlePreview
      article={article('short title')}
    />, '.article-preview__title', 'short title');
  });

  it('Should render a title with the trailing 3 dots', () => {
    shouldContainText(<ArticlePreview
      article={article('12345678901234567890123456789012345678901')}
    />, '.article-preview__title', '1234567890123456789012345678901234567...');
  });

  it('Should render a description without the trailing 3 dots', () => {
    shouldContainText(<ArticlePreview
      article={article('short title', 'short description')}
    />, '.article-preview__sample', 'short description');
  });

  it('Should render a title with the trailing 3 dots', () => {
    shouldContainText(<ArticlePreview
      article={article('short title', '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901')}
    />, '.article-preview__sample', '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567...');
  });
});
