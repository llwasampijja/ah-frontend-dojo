// react libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// styles
import 'components/ModalBox/ModalBox.scss';

const ModalBox = (WrappedComponent, props) => (innerFunctionProps) => {
  // props destructuring
  const { title, closeModal } = innerFunctionProps;

  return (
    <div>
      {/* backdrop */}
      <div
        className="backdrop"
      />

      {/* ModalBox */}
      <div id="modal" className="modal">
        <header className="modal__header">
          <h4 className="modal__header__title">{title}</h4>
          <button
            className="modal__header__btn"
            onClick={closeModal}
            type="button"
          >
            X
          </button>
        </header>
        <section className="modal__section">
          <WrappedComponent {...props} />
        </section>
      </div>
    </div>
  );
};

// props validation
ModalBox.propTypes = {
  title: PropTypes.string,
  closeModal: PropTypes.func,
};

// props default values
ModalBox.defaultProps = {
  title: 'Form Modal',
};

export default ModalBox;
