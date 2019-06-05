import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const {
    name, value, inputType, handleChange, placeholder, children,
  } = props;
  return (
    <div className="form-group">

      <input
        className="form-control"
        id={name}
        name={name}
        type={inputType}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {children}
    </div>
  );
};

TextInput.defaultProps = {
  children: '',
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  children: PropTypes.node,

};

export default TextInput;
