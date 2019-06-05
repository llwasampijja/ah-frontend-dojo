// react libraries
import React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// components
import SignupUser from 'pages/SignupUser';

// test SignupUser component
describe('SignupUser Component', () => {
  it('matches the snapshot', () => {
    const component = shallow(<SignupUser />);
    expect(component).toMatchSnapshot();
  });
});
