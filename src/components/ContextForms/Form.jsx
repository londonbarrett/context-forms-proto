import * as React from 'react';
import PropTypes from 'prop-types';
import { Consumer, Provider } from './Context';

class Form extends React.Component {
  handleSubmit = context => (event) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    const { values, validateInputs } = context;
    const hasErrors = validateInputs();
    if (!hasErrors && onSubmit) {
      onSubmit(values);
    }
  }

  handleReset = context => () => {
    const { resetForm } = context;
    resetForm();
  }

  handleChange = context => () => console.log('Form::handleChange', context);

  render() {
    const { children, className, name } = this.props;
    return (
      <Provider formName={name}>
        <Consumer>
          {context => (
            <form
              onChange={this.handleChange(context)}
              onReset={this.handleReset(context)}
              onSubmit={this.handleSubmit(context)}
              className={className}
              name={name}
            >
              {children}
            </form>
          )}
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
  name: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  className: '',
  onSubmit: undefined,
};

export default Form;
