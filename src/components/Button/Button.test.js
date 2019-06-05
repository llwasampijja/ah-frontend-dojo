// React libraries
import React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// components
import Button from 'components/Button';

describe('Button Component', () => {
  it('Renders a button component', () => {
    const btnEvent = jest.fn();
    const BtnComponent = shallow(<Button btnName="Login" btnClass="btn btn-primary" btnEvent={btnEvent} />);

    // Test Button properties
    expect(BtnComponent.find('.btn').text()).toBe('Login');
    expect(BtnComponent.find('.btn').hasClass('btn btn-primary')).toBe(true);

    // Test click event on button
    BtnComponent.find('.btn').simulate('click');
    expect(btnEvent).toHaveBeenCalled();
  });
});
