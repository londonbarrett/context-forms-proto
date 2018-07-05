import * as React from 'react';

export class Provider extends React.Component {
  subscribers = {};
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
      []
    );
    this.errors[name] = errors;
    this.values[name] = value;
    if (this.subscribers[name]) {
      this.subscribers[name].setState({
        errors: errors,
        formErrors: this.errors,
        hasErrors: errors && errors.length > 0,
        isDirt: true,
        values: this.values
      });
    }
    console.log('setValue', this.subscribers);
    return({
      errors: errors,
      hasErrors: errors && errors.length > 0,
      isDirt: true
    });
  }
  subscribe(component) {
    const { name } = component.props;
    if (!this.subscribers[name]) {
      this.subscribers[name] = component;
    }
  }
  render() {
    const { children } = this.props;
    return (
      <FormContext.Provider value={{
        errors: this.errors,
        subscribers: this.subscribers,
        subscribe: this.subscribe,
        setValue: this.setValue,
        values: this.values
      }}>
        {children}
      </FormContext.Provider>
    );
  }
}

export const FormContext = React.createContext({
  errors: {},
  subscribers: {},
  values: {},
});

export const FormConsumer = FormContext.Consumer;
