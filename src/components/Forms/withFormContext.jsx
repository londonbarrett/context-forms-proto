import * as React from 'react';
import { FormConsumer } from './FormContext';

const withFormContext = Component => class Wrapper extends React.Component {
  state = {};

  render() {
    const { name } = this.props;
    const { errors } = this.state;
    return (
      <FormConsumer>
        { (context) => {
          context.subscribe(this);
          return (
            <Component
              name={name}
              errors={errors}
            />
          );
        }}
      </FormConsumer>
    );
  }
};

export default withFormContext;
