// react libraries
import React, { Component } from 'react';

// components
import SignupForm from 'components/SignupForm';

// actions
import RegisterUser from 'store/actions/registerUser';

// store
import store from 'store/store';

class SignupUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    };
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    const {
      email, username, password,
    } = this.state;
    const signupData = {
      user: {
        username,
        email,
        password,
      },
    };
    store.dispatch(RegisterUser(signupData));
  }

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      email, username, password, confirmPassword,
    } = this.state;
    return (
      <div>
        <SignupForm
          email={email}
          username={username}
          password={password}
          confirmPassword={confirmPassword}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
        />
      </div>
    );
  }
}

export default SignupUser;
