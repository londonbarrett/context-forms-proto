import * as React from 'react';
import PropTypes from 'prop-types';
import { Provider, FormConsumer } from './FormContext';
// TODO: remove Form prefix from components

class Form extends React.Component {
  context = {};

  onSubmit = (event) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    const { errors, values } = this.context;
    if (onSubmit) {
      onSubmit({ event, errors, values });
    }
  }

  render() {
    const { children, className } = this.props;
    return (
      <Provider>
        <FormConsumer>
          { (context) => {
            this.context = context;
            return (
              <form
                onSubmit={this.onSubmit}
                className={className}
              >
                {children}
              </form>
            );
          }}
        </FormConsumer>
      </Provider>
    );
  }
}

Form.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  className: '',
  onSubmit: undefined,
};

export default Form;
