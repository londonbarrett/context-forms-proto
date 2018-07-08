import * as React from 'react';
import { FormConsumer } from './FormContext';

const formInput = Component => class FormInput extends React.Component {
  state = {};

  update = context => (value) => {
    console.log(value);
    const meta = context.setValue(
      this,
      value,
    );
    this.setState(meta);
  }

  render() {
    const { id, name, label } = this.props;
    const { hasErrors, isDirt } = this.state;
    return (
      <FormConsumer>
        { (context) => {
          context.register(this);
          return (
            <Component
              id={id}
              name={name}
              label={label}
              update={this.update(context)}
              formErrors={context.errors}
              formValues={context.values}
              isDirt={isDirt}
              hasErrors={hasErrors}
            />
          );
        }}
      </FormConsumer>
    );
  }
};

export default formInput;
