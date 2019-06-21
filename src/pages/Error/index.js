import React from 'react';
// styles
import './ErrorPageStyle.scss';

const PageNotFound = () => (
  <div className="container">
    <div className="copy-container error-space">
      <p className="error">
        404
      </p>
      <br />
      <p className="error1">
        Page not found.
      </p>
      <p className="error2">
        <a href="https://ah-frontend-dojo.herokuapp.com/">Go back</a>
      </p>
    </div>
  </div>

);
export default PageNotFound;
