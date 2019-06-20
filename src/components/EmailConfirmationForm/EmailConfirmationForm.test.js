// react libraries
import React from 'react';

// third party libraries
import { shallow } from 'enzyme';

// components
import EmailConfirmationForm from '.';

describe('EmailConfirmation Component', () => {
  const props = {
    backdropId: 'id',
    closeModal: () => { },
  };

  it('should render without exploding', () => {
    const wrapper = shallow(<EmailConfirmationForm {...props} />);
    expect(wrapper.length).toBe(1);
  });

  it('should render an error', () => {
    const wrapper = shallow(<EmailConfirmationForm />);
    wrapper.setProps({ isConfirmEmailError: true });

    expect(wrapper.find('small').length).toBe(1);
  });

  it('should render a success message', () => {
    const wrapper = shallow(<EmailConfirmationForm />);
    wrapper.setProps({ isConfirmEmailSuccess: true });

    expect(wrapper.find('small').length).toBe(1);
  });

  it('should render a loader while sending a message', () => {
    const wrapper = shallow(<EmailConfirmationForm />);
    wrapper.setProps({ isLoading: true });

    expect(wrapper.find('.signupForm__loader').length).toBe(1);
  });
});
