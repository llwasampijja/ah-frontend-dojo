import React from 'react';
import { shallow } from 'enzyme';
import Login from 'components/Login';

// test to check if the Login component matches the snapshot
describe('Login Component', () => {
  it('matches the snapshot', () => {
    const component = shallow(<Login />);
    expect(component).toMatchSnapshot();
  });
});
