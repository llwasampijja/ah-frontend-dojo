// react libraries
import React from 'react';

// components
import { shouldContainClass, shouldContainText } from 'utils';
import NavBar from './index';

describe('Navbar Component', () => {
  it('Should contain a navbar class', () => {
    shouldContainClass(<NavBar />, '.navbar');
  });

  it('Should conatain a branding class', () => {
    shouldContainClass(<NavBar />, '.navbar__branding');
  });

  it('Should contain a branding name class', () => {
    shouldContainText(<NavBar />, '.navbar__branding__name', 'Authors\' Haven');
  });

  it('Should contain a moto class', () => {
    shouldContainText(<NavBar />, '.navbar__branding__moto', 'We provide blogging bliss and areading experience second to none');
  });

  it('Should contain a navigation class', () => {
    shouldContainClass(<NavBar />, '.navbar__navigation');
  });

  it('Should contain an auth class', () => {
    shouldContainClass(<NavBar />, '.navbar__navigation__auth');
  });

  it('Should contain an articles class', () => {
    shouldContainClass(<NavBar />, '.navbar__navigation__articles');
  });

  it('Should contain an articles ul class', () => {
    shouldContainClass(<NavBar />, '.navbar__navigation__articles__ul');
  });
});
