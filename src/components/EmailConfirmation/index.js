// react libraries
import React, { Component } from 'react';

// third-party libraries
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// components
import EmailConfirmationForm from 'components/EmailConfirmationForm';

// actions
import confirmEmailActions from 'store/actions/confirmEmailActions';


export class EmailConfirmation extends Component {
  static propTypes = {
    sendEmail: PropTypes.func,
    isLoading: PropTypes.bool,
    isConfirmEmailSuccess: PropTypes.bool,
    isConfirmEmailError: PropTypes.bool,
    closeModal: PropTypes.func,
  };

  /**
  */
  static defaultProps = {
    sendEmail: () => {},
    isLoading: false,
    isConfirmEmailSuccess: false,
    isConfirmEmailError: false,
    closeModal: () => {},
  };


  /**
   * This is a function where the conponent state is initialized
   *
   */
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  /**
   * This is a function which handles onclick events for the
   * button on the signup form
   * @param {event} - An event param*
   * @example
   * on-submission handler for the form
   *     submit(event)
   * submit user details on click
   */
  onSubmitHandler = (event) => {
    event.preventDefault();
    const { email } = this.state;
    const { sendEmail } = this.props;

    sendEmail(email);
  }

  /**
   * This is a function which handles onchange events for
   * the input fields for the signup form
   * @param {event} - An event param*
   */
  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  /**
   * This is a function which renders the SignupUser component
   * @return {component}
   */
  render() {
    const { email, } = this.state;
    const {
      isLoading,
      isConfirmEmailSuccess,
      isConfirmEmailError,
      closeModal
    } = this.props;

    if (isConfirmEmailSuccess) {
      return <Redirect to="/reset-password" />;
    }
    return (
      <div>
        <EmailConfirmationForm
          email={email}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
          isConfirmEmailError={isConfirmEmailError}
          isConfirmEmailSuccess={isConfirmEmailSuccess}
          closeModal={closeModal}
          isLoading={isLoading}
          backdropId="openResetPasswordModal"
        />
      </div>
    );
  }
}

/**
* This is a function which maps the props to state
* @param {object} - A dictionary of state param*
* @return {object}
*/

const mapStateToProps = (
  {
    confirmEmailReducer:
    {
      isLoading, isConfirmEmailSuccess, isConfirmEmailError
    }
  }
) => (
  { isLoading, isConfirmEmailSuccess, isConfirmEmailError }
);

/**
* This is a function shich dispatches signup function to props
* @param {function} - An in-built function param*
* @return {function}
*/
const mapDispatchToProps = dispatch => ({
  sendEmail: (email) => {
    dispatch(confirmEmailActions(email));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EmailConfirmation);
