// React libraries
import React from 'react';
// third-party libraries
import { shallow } from 'enzyme';
// components
import InputBox from 'components/InputBox';

describe('Input Component', () => {
  it('Renders an input component', () => {
    const wrapper = shallow(
      <InputBox
        name="username"
        inputType="text"
        handleChange={jest.fn()}
        placeholder="username"
        inputClass="input-control"
        value="Bison"
      />,
    );

    const textComponent = wrapper.find('input');

    // Text input
    expect(textComponent.prop('type')).toEqual('text');
    expect(textComponent.prop('name')).toEqual('username');
    expect(textComponent.prop('value')).toEqual('Bison');
    expect(textComponent.prop('required')).toEqual(true);

    // Numeric input
    wrapper.setProps({ inputType: 'numeric' });
    expect(wrapper.find('input').prop('type')).toEqual('numeric');

    // Email input
    wrapper.setProps({ inputType: 'email' });
    expect(wrapper.find('input').prop('type')).toEqual('email');


    // password input
    wrapper.setProps({ inputType: 'password' });
    expect(wrapper.find('input').prop('type')).toEqual('password');
  });
});
