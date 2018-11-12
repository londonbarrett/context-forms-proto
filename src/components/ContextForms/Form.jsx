import * as React from 'react';
import PropTypes from 'prop-types';
import { Provider, Consumer } from './Context';

class Form extends React.Component {
  context = {};

  onSubmit = (event) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    const { values, validateInputs } = this.context;
    const hasErrors = validateInputs();
    if (!hasErrors && onSubmit) {
      onSubmit(values);
    }
  }

  onReset = () => {
    const { resetForm } = this.context;
    resetForm();
  }

  onChange = context => (event) => {
    console.log('FORM CHANGE', context, event.target);
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
                className={className}
                name={name}
                onChange={this.onChange(context)}
                onReset={this.onReset}
                onSubmit={this.onSubmit}
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
