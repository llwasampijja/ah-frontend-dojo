// react libraries
import React from 'react';
// third-party libraries
import { shallow } from 'enzyme';
// components
import GoogleButtons from './index';
// Define a shared shallow renderer function
const googleBtn = (props = {}) => {
  const google = shallow(<GoogleButtons {...props} />);
  return google;
};
// Define the tests for the Facebook button
describe('Google Login', () => {
  // Pass the value of the shallow renderer before each test

  let google;
  beforeEach(() => {
    google = googleBtn();
  });

  // Test to see if it matches the snapshot

  it('should match the snapshot', () => {
    const wrapper = shallow(<GoogleButtons />);
    expect(wrapper).toMatchSnapshot();
  });

  // Test to see if it works as expected
  it('should work as expected', () => {
    const response = {
      accessToken: 'auth_token'
    };
    google.instance().responseGoogle(response);
  });

  // Test to see if it renders a facebook button
  it('should render a google button', () => {
    const wrapper = google.find('.googlebutton');
    expect(wrapper.length).toBe(1);
  });
});
