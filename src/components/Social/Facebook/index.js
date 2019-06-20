// react libraries
import React, { Component } from 'react';
// third-party libraries
import FacebookLogin from 'react-facebook-login';
// components
import LoginFacebook from 'store/actions/socialActions/FacebookActions';
// store
import store from 'store/store';
// styles
import './FacebookStyle.scss';

class FacebookButton extends Component {
  /**
  * This is a class which calls the LoginFacebook action.
  * @param {object} - A object param
  * @return {callbackFunction}
  * @example
  * foo = () => {fee();}
  */
  responseFacebook = (response) => {
    const FacebookToken = response.accessToken;
    store.dispatch(LoginFacebook(FacebookToken));
  };

  /**
  * This is a function which reders the facebook button component.
  * @param {none}
  * @return {component}
  * @example
  * foo = () => {(<component />)}
  */
  render() {
    return (
      <div className="facebookbutton">
        <FacebookLogin
          appId="279362183016248"
          fields="name,email,picture"
          callback={this.responseFacebook}
          textButton={false}
          icon={(
            <img
              src="https://img.icons8.com/color/48/000000/facebook-circled.png"
              alt="Facebook"
              widith="30px"
              height="30px"
            />
          )}
        />
      </div>
    );
  }
}

export default FacebookButton;
