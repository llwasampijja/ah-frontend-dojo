import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  Settings,
  mapDispatchToProps,
} from 'components/Profile/Settings';

describe('Setting Component', () => {
  const mockedFunction = jest.fn();
  const component = shallow(<Settings updateProfile={mockedFunction} username="nadralia" />);
  it('should match the snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('submit user details', () => {
    component.setProps({
      userData: { firstname: 'john', lastname: 'doe', bio: 'this is biodata' }
    });

    const event = {
      userData: { profile: { firstname: 'john', lastname: 'doe', bio: 'this is biodata' } },
      preventDefault: jest.fn()
    };

    const instance = component.instance();
    instance.handleSubmit(event);
    expect(instance.props.updateProfile).toBeCalled();
  });
  it('should handle the onchange event', () => {
    const event = {
      target: {
        name: 'firstname',
        value: 'nadralia',
      },
    };

    component.instance().handleChange(event);
    expect(component.instance().state.firstname).toBe('nadralia');
  });

  it('should map dispatch to props', () => {
    const mockedDispatch = jest.fn();

    mapDispatchToProps(mockedDispatch).updateProfile();
    expect(mockedDispatch).toHaveBeenCalled();
  });
});
