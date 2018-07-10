import * as React from 'react';
import PropTypes from 'prop-types';
import { Provider, Consumer } from './FormContext';

class Form extends React.Component {
  context = {};

  onSubmit = (event) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    const { errors, values, validateInputs } = this.context;
    validateInputs();
    // TODO: check if form is valid
    if (onSubmit) {
      onSubmit({
        ...event,
        errors,
        values,
      });
    }
  }

  onReset = () => {
    const { resetForm } = this.context;
    resetForm();
  }

  render() {
    const { children, className, name } = this.props;
    return (
      <Provider>
        <Consumer>
          { (context) => {
            this.context = context;
            return (
              <form
                onSubmit={this.onSubmit}
                onReset={this.onReset}
                className={className}
                name={name}
              >
                {children}
              </form>
            );
          }}
        </Consumer>
      </Provider>
    );
  }
}

Form.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string,
  name: PropTypes.string,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  className: '',
  name: undefined,
  onSubmit: undefined,
};

export default Form;
