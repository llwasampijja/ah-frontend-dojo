// react libraries
import React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// components
import SignupForm from 'components/SignupForm';

// test SignupForm component
describe('SignupForm Component', () => {
  it('matches the snapshot', () => {
    const component = shallow(<SignupForm />);
    expect(component).toMatchSnapshot();
  });
});
