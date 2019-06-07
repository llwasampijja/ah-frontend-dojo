import React from 'react';
import './Footer.scss';

const Footer = () => (
  <div className="footer">
    <div className="footer__inner">
      <p className="footer__inner__copyright">
        <span>&copy; 2019 </span>
        <a className="footer__inner__copyright--website" href="https://ah-frontend-dojo.herokuapp.com/">Authors&apos; Haven</a>
      </p>
      <p className="footer__inner__developer">
        <span>Developed by: </span>
        <span className="footer__inner__developer--name">The dojo</span>
      </p>
    </div>
  </div>
);

export default Footer;
