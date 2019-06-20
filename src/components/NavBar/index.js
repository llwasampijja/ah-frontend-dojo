// react libraries
import React, { Component } from 'react';

// third party libraries
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// styles
import './NavBarStyle.scss';


import SignupUserPage from 'components/SignupUser';
import Login from 'components/Login';
import { logoutUser } from 'store/actions/loginActions';

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signupModal: false,
      loginModal: false,
      openResetPasswordModal: false,
    };
  }

  logout = (e) => {
    e.preventDefault();
    const { logout } = this.props;

    logout();
  };

  openModalHandler = (modalId) => {
    this.setState(prevState => (
      { [modalId]: !prevState[modalId] }
    ));
  };

  render() {
    const { signupModal, loginModal } = this.state;
    const { user, isFacebookLoggedIn, isGoogleLoggedIn } = this.props;
    if (isFacebookLoggedIn) {
      return <Redirect to="/articles" />;
    }
    if (isGoogleLoggedIn) {
      return <Redirect to="/articles" />;
    }
    return (
      <div className="navbar">
        {
          signupModal && (
            <SignupUserPage
              closeModal={() => this.openModalHandler('signupModal')}
            />
          )
        }
        {
          (loginModal && !isFacebookLoggedIn && !isGoogleLoggedIn) && (
            <Login
              closeModal={() => this.openModalHandler('loginModal')}
            />

          )
        }

        <div className="navbar__branding">
          <div className="navbar__branding__name">
            <h1>
              {"Authors' Haven"}
            </h1>
          </div>
          <div className="navbar__branding__moto">
            <p>
              We provide blogging bliss and a
            </p>
            <p>
              reading experience second to none
            </p>
          </div>
        </div>
        <div className="navbar__navigation">
          <div className="navbar__navigation__auth" id="userInfo">
            {user.token && (
            <ul>

              <li className="navbar__navigation__auth__button">
                <span
                  className="navbar__navigation__auth__button--link"
                  style={{ cursor: 'pointer' }}
                >
                  <a href={`/profile/${user.username}`}>
                    { user.username }
                  </a>
                </span>
              </li>

              <li className="navbar__navigation__auth__button">
                <span
                  className="navbar__navigation__auth__button--link"
                  style={{ cursor: 'pointer' }}
                  onClick={this.logout}
                  role="button"
                  tabIndex="0"
                  id="logout"
                  onKeyPress={this.handleKeyPress}
                >
                  {' '}
                      Logout
                </span>
              </li>

            </ul>

            )
            }

            {!user.token && (

              <ul>
                <li className="navbar__navigation__auth__button">
                  <span
                    id="loginModal"
                    href="/"
                    className="navbar__navigation__auth__button--link"
                    style={{ cursor: 'pointer' }}
                    onClick={() => (this.openModalHandler('loginModal'))}
                    role="button"
                    tabIndex="0"
                    onKeyPress={this.handleKeyPress}
                  >
                    Login
                  </span>
                </li>

                {' '}
                <li className="navbar__navigation__auth__button">
                  <span
                    id="signupModal"
                    href="/"
                    className="navbar__navigation__auth__button--link"
                    style={{ cursor: 'pointer' }}
                    onClick={() => (this.openModalHandler('signupModal'))}
                    role="button"
                    tabIndex="0"
                    onKeyPress={this.handleKeyPress}
                  >
                    Sign Up
                  </span>
                </li>
              </ul>
            )}

          </div>
          <div className="navbar__navigation__articles">
            <ul className="navbar__navigation__articles__ul">
              <li className="navbar__navigation__articles__ul__li">
                <Link className="navbar__navigation__articles__ul__li--button" to="/">
                  Home
                </Link>
              </li>
              <li className="navbar__navigation__articles__ul__li">
                <Link className="navbar__navigation__articles__ul__li--button" to="/articles">
                  Articles
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

Navbar.defaultProps = {
  user: {},
};

Navbar.propTypes = {
  isFacebookLoggedIn: PropTypes.bool,
  isGoogleLoggedIn: PropTypes.bool,
  logout: PropTypes.func.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    token: PropTypes.string,
  })
};

Navbar.defaultProps = {
  isFacebookLoggedIn: false,
  isGoogleLoggedIn: false,
};

export const mapStateToProps = (state) => {
  const { user } = state.loginReducer;
  const { isFacebookLoggedIn } = state.facebookReducer;
  const { isGoogleLoggedIn } = state.googleReducer;
  return { user, isFacebookLoggedIn, isGoogleLoggedIn };
};

export const mapDispatchToProps = dispatch => ({
  logout() { (dispatch(logoutUser())); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
