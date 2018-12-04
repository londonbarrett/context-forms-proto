import * as React from 'react';
import PropTypes from 'prop-types';
import { Provider, Consumer } from './Context';

class Form extends React.Component {
  context = {};

  handleSubmit = (event) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    const { values, validateInputs } = this.context;
    const hasErrors = validateInputs();
    if (!hasErrors && onSubmit) {
      onSubmit(values);
    }
  }

  handleReset = () => {
    const { resetForm } = this.context;
    resetForm();
  }

  handleChange = event => console.log('Form::handleChange', event.target.value, this.context);

  render() {
    const { children, className, name } = this.props;
    return (
      <Provider>
        <Consumer>
          { (context) => {
            this.context = context;
            return (
              <form
                onChange={this.handleChange}
                onReset={this.handleReset}
                onSubmit={this.handleSubmit}
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element), PropTypes.element,
  ]).isRequired,
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
