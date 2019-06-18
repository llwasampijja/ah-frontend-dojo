import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { EmailConfirmation } from '.';

describe('EmailConfirmation Component', () => {
  const initialState = {
    isLoading: false,
    isConfirmEmailSuccess: false,
    isConfirmEmailError: false,
    sendEmail: jest.fn(),
  };

  const mockStore = configureStore();
  const store = mockStore(initialState);

  const wrapper = mount(
    <MemoryRouter>
      <Provider store={store}>
        <EmailConfirmation />
      </Provider>
    </MemoryRouter>
  );

  const event = {
    preventDefault: jest.fn(),
    target: {
      name: 'email',
      value: 'bisonlou@gmail.com'
    }
  };

  const emailConfirmationWrapper = wrapper.find('EmailConfirmation');

  it('should render without exploding', () => {
    expect(shallow(<EmailConfirmation />).length).toBe(1);
  });

  it('should handle change', () => {
    const emailInputWrapper = emailConfirmationWrapper.find('#email').first();
    emailInputWrapper.simulate('change', event);

    expect(emailConfirmationWrapper.instance().state.email).toBe('bisonlou@gmail.com');
  });

  it('should handle submit', () => {
    const buttonWrapper = emailConfirmationWrapper.find('.signupForm__button').first();
    buttonWrapper.simulate('click', event);
  });

  it('should not display the modal once the email is succesfully confirmed', () => {
    const component = shallow(<EmailConfirmation />);
    component.setProps({ isConfirmEmailSuccess: true });

    expect(component.find('EmailConfirmationForm').length).toBe(0);
  });
});
