import * as React from 'react';
import PropTypes from 'prop-types';
import { Context } from './Context';

const withFormContext = (Component) => {
  class Wrapper extends React.Component {
    static contextType = Context;

    state = {};

    render() {
      const {
        errors,
        hasErrors,
      } = this.state;
      const { resetForm } = this.context;
      return (
        <Component
          errors={errors}
          hasErrors={hasErrors}
          resetForm={resetForm}
          {...this.props}
        />
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
