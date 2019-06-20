// react libraries
import React from 'react';
// third-party libraries
import { shallow } from 'enzyme';
// components
import FacebookButton from './index';
// Define a shared shallow renderer function
const fbButton = (props = {}) => {
  const facebook = shallow(<FacebookButton {...props} />);
  return facebook;
};

describe('Facebook Login', () => {
// Pass the value of the shallow renderer before each test
  let facebook;
  beforeEach(() => {
    facebook = fbButton();
  });

  it('should render without errors', () => {
    const wrapper = shallow(<FacebookButton />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should work as expected', () => {
    const response = {
      accessToken: 'testToken',
    };
    facebook.instance().responseFacebook(response);
  });

  it('should render a facebook button', () => {
    const wrapper = facebook.find('.facebookbutton');
    expect(wrapper.length).toBe(1);
  });
});
