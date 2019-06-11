// react libraries
import React from 'react';

// third party libraries
import { shallow } from 'enzyme';

// components
import Loader from './index';


describe('Loader Component', () => {
  it('Should render', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.exists()).toBe(true);
  });
});
