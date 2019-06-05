import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    btnClass, btnName, btnEvent,
  } = props;
  return (

    <button
      className={btnClass}
      type="button"
      onChange={btnEvent}
    >
      {btnName}
    </button>
  );
};


Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  btnClass: PropTypes.string.isRequired,
  btnEvent: PropTypes.func.isRequired,

};
export default Button;
