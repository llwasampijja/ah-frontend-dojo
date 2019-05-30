import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from 'pages/Error';

// test to check if the Error component matches the snapshot
describe('Login Component', () => {
  it('matches the snapshot', () => {
    const component = shallow(<PageNotFound />);
    expect(component).toMatchSnapshot();
  });
});
