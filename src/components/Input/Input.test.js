import React from 'react';
import { shallow } from 'enzyme';
import Button from 'components/Input/Button';
import TextInput from 'components/Input/TextInput';

// test to check if the Error component matches the snapshot
describe('Button Component', () => {
  it('Renders a button component', () => {
    const btnComponent = shallow(<Button btnName={'Login'} btnClass={'btn btn-primary'} btnEvent={jest.fn()} />);
    expect(btnComponent.find('.btn').text()).toBe('Login');
    expect(btnComponent.find('.btn').hasClass('btn btn-primary')).toBe(true);
  });
});
