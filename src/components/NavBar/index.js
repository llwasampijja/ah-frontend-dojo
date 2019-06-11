// react libraries
import React, { Component } from 'react';

// third party libraries
import { Link } from 'react-router-dom';

// styles
import './NavBarStyle.scss';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
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
                <Link className="navbar__navigation__auth__button--link" to="/register">
                  Sign Up
                </Link>
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
