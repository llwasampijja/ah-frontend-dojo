import React from 'react';
import { shallow } from 'enzyme';
import Home from 'pages/Landing';

// test to check if the Home component matches the snapshot
describe('Login Component', () => {
  it('matches the snapshot', () => {
    const component = shallow(<Home />);
    expect(component).toMatchSnapshot();
  });
});
