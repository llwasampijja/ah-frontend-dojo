// react libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// styles
import 'components/SignupForm/SignupForm.scss';

// components
import Button from 'components/Button';
import InputBox from 'components/InputBox';
import ModalBox from 'components/ModalBox';

//  string constants
import {
  EMAIL_CONFIRMATION_HEADER,
  EMAIL_CONFIRMATION_SUCCESS_MESSAGE,
  EMAIL_CONFIRMATION_ERROR_MESSAGE,
} from 'constants/constantStrings';

/**
/**
 * This is a function which return the SignupForm component
 * @param props
 * @return {component}
 */
const EmailConfirmationForm = (props) => {
  const {
    onChangeHandler,
    email,
    onSubmitHandler,
    isConfirmEmailError,
    isConfirmEmailSuccess,
    isLoading,
  } = props;

  return (
    // Signup form enclosed inside the modal
    <ModalBox show title={EMAIL_CONFIRMATION_HEADER} {...props}>
      <div>
        <form className="signupForm" id="signupForm">
          <InputBox
            name="email"
            inputType="email"
            handleChange={onChangeHandler}
            placeholder="email"
            inputClass="signupForm__input"
            value={email}
          >
            <br />
            <span id="signupForm__input__error__email" className="signupForm__input__error">
              {
                isConfirmEmailError && <small>{EMAIL_CONFIRMATION_ERROR_MESSAGE}</small>
              }
            </span>
          </InputBox>
          <span className="signupForm__signUpMessage">
            {
              isConfirmEmailSuccess && <small>{ EMAIL_CONFIRMATION_SUCCESS_MESSAGE }</small>
            }
          </span>
          {
            isLoading && <div className="signupForm__loader" />
          }
          <Button
            id="signupForm__button"
            btnClass="signupForm__button"
            btnName={EMAIL_CONFIRMATION_HEADER}
            btnEvent={onSubmitHandler}
          />
        </form>
      </div>
    </ModalBox>
  );
};

// prop types validations
EmailConfirmationForm.propTypes = {
  onChangeHandler: PropTypes.func,
  email: PropTypes.string,
  onSubmitHandler: PropTypes.func,
  isConfirmEmailError: PropTypes.bool,
  isConfirmEmailSuccess: PropTypes.bool,
  isLoading: PropTypes.bool,
};

// default props
EmailConfirmationForm.defaultProps = {
  onChangeHandler: () => { },
  email: '',
  onSubmitHandler: () => { },
  isConfirmEmailError: false,
  isConfirmEmailSuccess: false,
  isLoading: false,
};

export default EmailConfirmationForm;
