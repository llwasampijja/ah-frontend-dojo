import React from 'react';
import { shallow, mount } from 'enzyme';
import ProfileMain from 'components/Profile/Index';

describe('Setting Component', () => {
  const props = {
    match:
    {
      params: {
        profileUser: 'nadralia',
      }
    },
    authenticatedUser: 'nadralia',
  };

  it('should match the snapshot', () => {
    const component = shallow(<ProfileMain {...props} />);
    expect(component).toMatchSnapshot();
  });
});
