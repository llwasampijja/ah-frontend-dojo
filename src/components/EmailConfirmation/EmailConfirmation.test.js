import React from 'react';
import { shallow } from 'enzyme';
import { EmailConfirmation } from '.';

describe('EmailConfirmation Component', () => {
  it('should render without exploding', () => {
    const wrapper = shallow(<EmailConfirmation />);
    expect(wrapper.length).toBe(1);
  });
});
