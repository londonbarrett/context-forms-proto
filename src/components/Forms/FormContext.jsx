import * as React from 'react';

export class Provider extends React.Component {
  subscribers = {};

  inputs = {};

  values = {};

  errors = {};

  setValue(input, value) {
    const { name, validators } = input.props;
    const errors = validators && validators.reduce(
      (acc, validator) => {
        const validation = validator(value);
        if (validation) {
          acc.push(validation);
        }
        return acc;
      },
      [],
    );
    this.errors[name] = errors;
    this.values[name] = value;
    // TODO: is there any way of sending updates without setting states?
    if (this.subscribers[name]) {
      this.subscribers[name].forEach(subscriber => subscriber.setState({
        errors,
        formErrors: this.errors,
        formValues: this.values,
        hasErrors: errors && errors.length > 0,
        isDirt: true,
        values: this.values,
      }));
    }
    return ({
      errors,
      hasErrors: errors && errors.length > 0,
      isDirt: true,
    });
  }

  reset() {
    this.errors = {};
    this.values = {};
  }

  subscribe(component) {
    const { name } = component.props;
    if (!this.subscribers[name]) {
      this.subscribers[name] = [];
    }
    if (!this.subscribers[name].includes(component)) {
      this.subscribers[name].push(component);
    }
  }

  // TODO: why do I need this?
  register(input) {
    const { name } = input.props;
    if (!this.inputs[name]) {
      this.inputs[name] = input;
    }
  }

  render() {
    const { children } = this.props;
    return (
      <FormContext.Provider value={{
        errors: this.errors,
        inputs: this.inputs,
        subscribers: this.subscribers,
        subscribe: this.subscribe,
        register: this.register,
        setValue: this.setValue,
        values: this.values,
      }}
      >
        {children}
      </FormContext.Provider>
    );
  }
}

export const FormContext = React.createContext({
  errors: {},
  subscribers: {},
  inputs: {},
  values: {},
});

export const FormConsumer = FormContext.Consumer;
