// react imports
import React from 'react';

// third party libraries
import { shallow } from 'enzyme';

// import profile
import {
  Profile,
  mapDispatchToProps,
} from 'pages/Profile';

const profile = {
  firstname: 'nadralia',
  lastname: 'lonerk',
  bio: 'this is my biodata',
  image: 'http://biodatainformation.jpg',
};

describe('Profile', () => {
  it('should render', () => {
    const component = shallow(<Profile profile={profile} />);
    expect(component).toMatchSnapshot();
  });

  it('should map dispatch to props', () => {
    const mockedDispatch = jest.fn();

    mapDispatchToProps(mockedDispatch).fetchProfile();
    expect(mockedDispatch).toHaveBeenCalled();
  });
});
