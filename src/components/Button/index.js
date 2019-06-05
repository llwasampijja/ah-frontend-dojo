// React libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';

const Button = (props) => {
  // Destructure props
  const {
    btnClass, btnName, btnEvent,
  } = props;

  return (

    <button
      className={btnClass}
      type="button"
      onClick={btnEvent}
    >
      {btnName}
    </button>
  );
};

// Props validation
Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  btnClass: PropTypes.string.isRequired,
  btnEvent: PropTypes.func.isRequired,

};
export default Button;
