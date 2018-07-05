import * as React from 'react';
import { FormConsumer } from './FormContext';

const formInput = (options) => (Component) => {
  return class FormInput extends React.Component {
    state = {}
    onInput = context => value => {
      const meta = context.setValue(
        this,
        value
      );
      this.setState(meta)
    }
    render() {
      const { id, name, label } = this.props;
      const { hasErrors, isDirt } = this.state;
      return (
        <FormConsumer>
          { context => {
            return (
              <Component
                id={id}
                name={name}
                label={label}
                onInput={this.onInput(context)}
                isDirt={isDirt}
                hasErrors={hasErrors}
              />
            );
          }}
        </FormConsumer>
      );
    }
  }
}

export default formInput;
