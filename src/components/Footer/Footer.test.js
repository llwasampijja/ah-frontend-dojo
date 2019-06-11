// react
import React from 'react';

// components
import { shouldContainClass, shouldContainText } from 'utils';
import Footer from './index';

describe('Footer component', () => {
  it('Should contain a footer class', () => {
    shouldContainClass(<Footer />, '.footer');
  });

  it('Should contain a footer class', () => {
    shouldContainClass(<Footer />, '.footer__inner');
  });

  it('Should contain a footer class', () => {
    shouldContainClass(<Footer />, '.footer__inner__copyright');
  });

  it('Should contain a footer class', () => {
    shouldContainClass(<Footer />, '.footer__inner__developer');
  });

  it('Should contain The dojo', () => {
    shouldContainText(<Footer />, '.footer__inner__developer--name', 'The dojo');
  });

  it('Should contain Author\' Haven', () => {
    shouldContainText(<Footer />, '.footer__inner__copyright--website', 'Authors\' Haven');
  });
});
