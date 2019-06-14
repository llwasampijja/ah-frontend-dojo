import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import { PasswordReset } from '.';


const mockStore = configureStore();

const initialState = {
  dispatchResetPassword: () => { },
  isLoading: false,
  isPassordResetSuccess: false,
  isPasswordResetError: false,
  passwordErrors: [],
  tokenErrors: [],
  loginReducer: {
    username: 'charles King',
    email: 'ck@mail.com',
    token: 'hdhdjjdudhjeje',
  }
};

const store = mockStore(initialState);

describe('Password Reset Component', () => {
  it('should render without exploding', () => {
    const wrapper = shallow(<PasswordReset />);
    expect(wrapper.length).toBe(1);
  });
});

describe('Password Reset Component', () => {
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <PasswordReset />
      </MemoryRouter>
    </Provider>
  );

  const event = {
    preventDefault: jest.fn(),
    target: {
      name: 'confirmPassword',
      value: 'password'
    }
  };

  const passwordResetWrapper = wrapper.find('PasswordReset');
  const buttonWrapper = wrapper.find('.password-reset__fields__field__button');

  it('should handle change', () => {
    const inputWrapper = wrapper.find('#confirmPassword');
    inputWrapper.simulate('change', event);

    expect(passwordResetWrapper.instance().state.confirmPassword).toBe('password');
  });

  it('should handle submit when the passwords are not the same', () => {
    passwordResetWrapper.instance().setState({ confirmPassword: 'password1', password: 'password' });
    buttonWrapper.simulate('click', event);

    expect(passwordResetWrapper.instance().state.isPasswordMatchError).toBe(true);
  });

  it('should handle submit when the passwords are the same', () => {
    passwordResetWrapper.instance().setState({ confirmPassword: 'password', password: 'password' });
    buttonWrapper.simulate('click', event);

    expect(passwordResetWrapper.instance().state.isPasswordMatchError).toBe(false);
  });

  it('should show a loader when processing request', () => {
    const component = shallow(<PasswordReset />);
    component.setProps({ isLoading: true });

    expect(component.find('Loader').length).toBe(1);
  });

  it('should show a a success message when the password is reset', () => {
    const component = shallow(<PasswordReset />);
    component.setProps({ isPassordResetSuccess: true });

    expect(component.find('.success__text').length).toBe(2);
  });
});
