import React from 'react';
import { shallow } from 'enzyme';
import { LandingPage } from './index';


const setUpLandingPage = () => {
  const component = shallow(<LandingPage />);
  return component;
};

describe('Landing Page', () => {
  it('Should render a bannerImage class', () => {
    const component = setUpLandingPage();
    const wrapper = component.find('.banner-image');
    expect(wrapper.length).toBe(1);
  });

  it('Should render a welcomePitch class', () => {
    const component = setUpLandingPage();
    const wrapper = component.find('.welcome-pitch');
    expect(wrapper.length).toBe(1);
  });

  it('Should contain an article-grid class', () => {
    const component = setUpLandingPage();
    const wrapper = component.find('.article-grid');
    expect(wrapper.length).toBe(1);
  });
});
