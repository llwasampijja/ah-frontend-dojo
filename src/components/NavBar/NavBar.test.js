import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';

describe('Header Component', () => {
  it('Should render a navbar', () => {
    const component = shallow(<NavBar />);
    const wrapper = component.find('.navbar');
    expect(wrapper.length).toBe(1);
  });
});

describe('Branding Component', () => {
  it('Should render an H1', () => {
    const component = shallow(<NavBar title="Author's Haven" />);
    const wrapper = component.find('h1');
    expect(wrapper.length).toBe(1);
  });
});
