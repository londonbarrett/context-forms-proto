import * as React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './FormContext';

const withFormContext = (Component) => {
  class Wrapper extends React.Component {
    state = {};

    render() {
      const {
        errors,
        hasErrors,
      } = this.state;
      return (
        <Consumer>
          { (context) => {
            context.subscribe(this);
            return (
              <Component
                errors={errors}
                hasErrors={hasErrors}
                resetForm={context.resetForm}
                {...this.props}
              />
            );
          }}
        </Consumer>
      );
    }
  }
  Wrapper.propTypes = {
    name: PropTypes.string,
  };
  Wrapper.defaultProps = {
    name: undefined,
  };
  return Wrapper;
};

export default withFormContext;
