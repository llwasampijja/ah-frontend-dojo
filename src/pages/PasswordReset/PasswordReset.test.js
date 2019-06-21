import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import { PasswordReset, mapDispatchToProps, mapStateToProps } from '.';


const mockStore = configureStore();

const initialState = {
  dispatchResetPassword: () => { },
  isLoading: false,
  isPassordResetSuccess: false,
  isPasswordResetError: false,
  passwordErrors: [],
  tokenErrors: [],
  facebookReducer: {
    isFacebookLoggedIn: false,
  },
  googleReducer: {
    isGoogleLoggedIn: false,
  },
  loginReducer: {
    user: {
      token: '',
    },
    username: 'charles King',
    email: 'ck@mail.com',
    token: 'hdhdjjdudhjeje',
  }
};

const store = mockStore(initialState);

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

  it('should render without exploding', () => {
    const shallowWrapper = shallow(<PasswordReset />);
    expect(shallowWrapper.length).toBe(1);
  });

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

  it('should display a success message when the password is reset', () => {
    const component = shallow(<PasswordReset />);
    component.setProps({ isPassordResetSuccess: true });

    expect(component.find('Redirect').length).toBe(1);
  });

  it('should show a token errors', () => {
    const component = shallow(<PasswordReset />);
    component.setProps({ isPasswordResetError: true });
    component.setProps({ tokenErrors: ['test error'] });
  });

  it('should display a password reset error', () => {
    const component = shallow(<PasswordReset />);
    component.setProps({ isPasswordResetError: true, passwordErrors: ['Invalid password'] });

    expect(component.find('.error').length).toBe(1);
  });

  it('should show a password errors', () => {
    const component = shallow(<PasswordReset />);
    component.setProps({ isPasswordResetError: true });
    component.setProps({ passwordErrors: ['test error'] });

    expect(component.find('.error').length).toBe(1);
  });

  it('should display a a token error when a token is invalid', () => {
    const component = shallow(<PasswordReset />);
    component.setProps({ isPasswordResetError: true, tokenErrors: ['Invalid password'] });

    expect(component.find('.error').length).toBe(1);
  });

  it('should map state to props', () => {
    const mockedState = {
      passwordResetReducer: {
        isLoading: true,
      }
    };

    const state = mapStateToProps(mockedState);
    expect(state.isLoading).toBe(true);
  });

  it('should map dispatch to props', () => {
    const mockedDispatch = jest.fn();

    mapDispatchToProps(mockedDispatch).dispatchResetPassword();
    expect(mockedDispatch).toHaveBeenCalled();
  });
});
