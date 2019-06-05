// react libraries
import React, { Component } from 'react';

// third party libraries
import { Link, Route } from 'react-router-dom';
// styles
import './NavBarStyle.scss';
// import { SignupUser } from '../../pages/SignupUser';
import SignupUserPage from 'components/SignupUser';
import { closeOpenModalFunction } from 'constants/staticsMethods';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openmodal: false,
    };
    this.openModalHandler = this.openModalHandler.bind(this);
  }

  openModalHandler = () => {
    this.setState({ openmodal: true });
    const openModalLink = document.getElementById('span-signup-link');
    openModalLink.addEventListener('click', closeOpenModalFunction);
  }

  render() {
    const { openmodal } = this.state;
    return (
      <div className="navbar">
        {
          openmodal && (
            <Route
              render={
                props => (
                  <SignupUserPage
                    {...props}
                  />
                )
              }
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
          <div className="navbar__navigation__auth">
            <ul>
              <li className="navbar__navigation__auth__button">
                <Link className="navbar__navigation__auth__button--link" to="/login">
                  Login
                </Link>
              </li>
              <li className="navbar__navigation__auth__button">
                <span id="span-signup-link" href="/" className="navbar__navigation__auth__button--link" style={{ cursor: 'pointer' }} onClick={this.openModalHandler} role="button" tabIndex="0" onKeyPress={this.handleKeyPress}>
                  Sign Up
                </span>
              </li>
            </ul>
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

export default Navbar;
