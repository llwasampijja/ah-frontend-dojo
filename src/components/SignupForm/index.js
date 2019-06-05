// react libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// styles
import 'components/SignupForm/SignupForm.scss';

// components
import Button from 'components/Button';
import InputBox from 'components/InputBox';
// import ModalBox from 'components/ModalBox';


const SignupForm = (props) => {
  const {
    onChangeHandler, email, username, password, confirmPassword, onSubmitHandler,
  } = props;
  return (
    <div className="signupForm">
      <form>
        <InputBox
          name="email"
          inputType="email"
          handleChange={onChangeHandler}
          placeholder="email"
          inputClass="signupForm__input"
          value={email}
        >
          <span id="signupForm__input__error__email" className="signupForm__input__error">
            <small>And erro occured</small>
          </span>
        </InputBox>
        <InputBox
          name="username"
          inputType="text"
          handleChange={onChangeHandler}
          placeholder="username"
          inputClass="signupForm__input"
          value={username}
        >
          <span id="signupForm__input__error__username" className="signupForm__input__error">
            <small>And erro occured</small>
          </span>
        </InputBox>
        <InputBox
          name="password"
          inputType="password"
          handleChange={onChangeHandler}
          placeholder="password"
          inputClass="signupForm__input"
          value={password}
        >
          <span id="signupForm__input__error__password" className="signupForm__input__error">
            <small>And erro occured</small>
          </span>
        </InputBox>
        <InputBox
          name="confirmPassword"
          inputType="password"
          handleChange={onChangeHandler}
          placeholder="confirm password"
          inputClass="signupForm__input"
          value={confirmPassword}
        >
          <span id="signupForm__input__error__confirmPassword" className="signupForm__input__error">
            <small>And erro occured</small>
          </span>
        </InputBox>
        <Button
          btnClass="signupForm__button"
          btnName="Signup"
          btnEvent={onSubmitHandler}
        />
      </form>
    </div>
  );
};

// prop types validations
SignupForm.propTypes = {
  onChangeHandler: PropTypes.func,
  email: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
  onSubmitHandler: PropTypes.func,
};

SignupForm.defaultProps = {
  onChangeHandler: () => {},
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  onSubmitHandler: () => {},
};

// export default ModalBox(SignupForm);
export default SignupForm;
