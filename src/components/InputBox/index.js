// React libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';

const InputBox = (props) => {
  // Destructure props
  const {
    name,
    value,
    inputType,
    inputClass,
    handleChange,
    placeholder,
    required,
    children,
  } = props;

  return (
    <React.Fragment>

      <input
        className={inputClass}
        id={name}
        name={name}
        type={inputType}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
      />
      {children}
    </React.Fragment>
  );
};

// Default props
InputBox.defaultProps = {
  children: '',
  required: true,
};

// Props validation
InputBox.propTypes = {
  name: PropTypes.string.isRequired,
  inputClass: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  children: PropTypes.node,

};

export default InputBox;
