// react imports
import React from 'react';

// third party libraries
import { shallow, mount } from 'enzyme';

// import PrivateRoute
import { PrivateRoute } from './PrivateRoute';

describe('PrivateRoute Component', () => {
  const props = {
    component: {
      ComingComponent: 'Settings',
      isAuthenticated: 'nadralia',
      rest: {
        setting: '',
      }
    }
  };
  it('should match the snapshot', () => {
    const component = shallow(<PrivateRoute {...props} />);
    expect(component).toMatchSnapshot();
  });
});
