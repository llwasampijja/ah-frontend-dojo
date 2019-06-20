// react
import React, { Component } from 'react';

// 3rd party libraries
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// styles
import './PasswordReset.scss';

// components
import InputBox from 'components/InputBox';
import Button from 'components/Button';
import NavBar from 'components/NavBar';
import Loader from 'components/Loader';

// actions
import resetPassword from 'store/actions/resetPassword';


export class PasswordReset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      confirmPassword: '',
      isPasswordMatchError: false,
      token: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { dispatchResetPassword } = this.props;
    const { password, confirmPassword, token } = this.state;

    if (password !== confirmPassword) {
      this.setState({ isPasswordMatchError: true });
    } else {
      this.setState({ isPasswordMatchError: false });
      dispatchResetPassword(password, token);
    }
  }

  render() {
    const {
      password,
      token,
      confirmPassword,
      isPasswordMatchError
    } = this.state;

    const {
      isLoading,
      isPasswordResetError,
      passwordErrors,
      tokenErrors,
      isPassordResetSuccess
    } = this.props;

    return (
      <div>

        {isLoading ? <Loader /> : null}

        <NavBar />
        <form className="password-reset">
          <div className="password-reset__fields">
            {
              isPassordResetSuccess
                ? (
                  <Redirect to="/" />
                )
                : (
                  <div>
                    <p className="password-reset__instruction">
                      We have sent you a token. Please check your email,
                       copy the token and paste it here.
                    </p>
                    <p className="password-reset__instruction">
                      Then simply go ahead and reset your password
                    </p>
                    <div>
                      <div className="password-reset__fields__field">
                        {
                          isPasswordResetError && tokenErrors.map(error => (
                            <small key={error} className="error">
                              {error}
                            </small>
                          ))
                        }
                        <InputBox
                          name="token"
                          value={token}
                          inputType="token"
                          inputClass="password-reset__fields__field__password"
                          handleChange={this.handleChange}
                          placeholder="Paste token here..."
                        />
                      </div>
                      {
                        isPasswordResetError && passwordErrors.map(error => (
                          <small key={error} className="error">
                            {error}
                          </small>
                        ))
                      }
                      <div className="password-reset__fields__field">
                        <InputBox
                          name="password"
                          value={password}
                          inputType="password"
                          inputClass="password-reset__fields__field__password"
                          handleChange={this.handleChange}
                          placeholder="New Password"
                        />
                      </div>

                      <div className="password-reset__fields__field">
                        {
                          isPasswordMatchError && <small className="error">Passwords do not match</small>
                        }
                        <InputBox
                          name="confirmPassword"
                          value={confirmPassword}
                          inputType="password"
                          inputClass="password-reset__fields__field__password"
                          handleChange={this.handleChange}
                          placeholder="Confirm Pasword"
                        />
                      </div>

                      <div className="password-reset__fields__field">
                        <Button
                          btnName="Reset Password"
                          btnClass="password-reset__fields__field__button"
                          btnEvent={this.handleSubmit}
                        />
                      </div>
                    </div>
                  </div>
                )
            }
          </div>
        </form>
      </div>
    );
  }
}

// prop type validation
PasswordReset.propTypes = {
  dispatchResetPassword: PropTypes.func,
  isLoading: PropTypes.bool,
  isPasswordResetError: PropTypes.bool,
  isPassordResetSuccess: PropTypes.bool,
  passwordErrors: PropTypes.arrayOf(
    PropTypes.string,
  ),
  tokenErrors: PropTypes.arrayOf(
    PropTypes.string,
  ),
};

// default props
PasswordReset.defaultProps = {
  isLoading: false,
  isPasswordResetError: false,
  isPassordResetSuccess: false,
  passwordErrors: [],
  tokenErrors: [],
  dispatchResetPassword: () => { },
};

export const mapStateToProps = ({
  passwordResetReducer: {
    isLoading,
    isPassordResetSuccess,
    isPasswordResetError,
    passwordErrors,
    tokenErrors,
  }
}) => ({
  isLoading,
  isPassordResetSuccess,
  isPasswordResetError,
  passwordErrors,
  tokenErrors,
});

export const mapDispatchToProps = dispatch => ({
  dispatchResetPassword: (password, token) => dispatch(resetPassword(password, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordReset);
