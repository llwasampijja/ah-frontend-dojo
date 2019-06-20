// react libraries
import React, { Component } from 'react';
// third-party libraries
import GoogleLogin from 'react-google-login';
// components
import LoginGoogle from 'store/actions/socialActions/GoogleActions';
// store
import store from 'store/store';
// styles
import './GoogleStyle.scss';

class GoogleButton extends Component {
  /**
   * This is a class which calls the LoginGoogle action.
   * @param {object} - A object param
   * @return {callbackFunction}
   * @example
   * foo = () => {fee();}
   */
  responseGoogle = (response) => {
    const GoogleToken = response.tokenId;
    store.dispatch(LoginGoogle(GoogleToken));
  };

  /**
   * This is a function which reders the google button component.
   * @param {none}
   * @return {component}
   * @example
   * foo = () => {(<component />)}
   */
  render() {
    return (
      <div className="googlebutton" id="googlebutton">
        <GoogleLogin
          clientId="39137008692-dmdrj00qulao069le80rk6rores32vdh.apps.googleusercontent.com"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          buttonText={false}
          cookiePolicy="single_host_origin"
          icon={<img src="https://icons8.com/icon/17949/google" alt="Google" />}
        />
      </div>
    );
  }
}

export default GoogleButton;
