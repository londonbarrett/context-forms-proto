import * as React from 'react';
import PropTypes from 'prop-types';

const FormContext = React.createContext({
  errors: {},
  subscribers: {},
  values: {},
});

export class Provider extends React.Component {
  errors = {};

  hasErrors = false;

  initialValues = {};

  inputs = {};

  isDirt = false;

  globals = [];

  subscribers = {};

  values = {};

  static propTypes = {
    children: PropTypes.element.isRequired,
  }

  setValue = (input, value) => {
    const { name } = input.props;
    const inputErrors = this.validateInput(input, value);
    if (inputErrors && inputErrors.length) {
      this.errors[name] = inputErrors;
    } else {
      delete this.errors[name];
    }
    this.values[name] = value;
    this.isDirt = true;
    const inputState = {
      errors: inputErrors,
      hasErrors: inputErrors && inputErrors.length > 0,
      isDirt: true,
      value,
    };
    if (this.subscribers[name]) {
      this.subscribers[name].forEach(
        subscriber => subscriber.setState(inputState),
      );
    }
    this.updateGlobals();
    input.setState(inputState);
  }

  // DONE
  validateInput = (input, value) => {
    const { validators } = input.props;
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
    return errors;
  }

  // DONE
  registerInput = (input) => {
    const { name, value } = input.props;
    if (!this.inputs[name]) {
      this.inputs[name] = input;
      this.values[name] = value || undefined;
      this.initialValues[name] = value || undefined;
    }
  }

  validateInputs = () => {
    Object.keys(this.inputs).forEach((name) => {
      const inputErrors = this.validateInput(
        this.inputs[name],
        this.values[name],
      );
      if (inputErrors) {
        this.errors[name] = inputErrors;
        const inputState = {
          errors: inputErrors,
          hasErrors: inputErrors && inputErrors.length > 0,
          isDirt: true,
        };
        this.inputs[name].setState(inputState);
        if (this.subscribers[name]) {
          this.subscribers[name].forEach(
            subscriber => subscriber.setState(inputState),
          );
        }
      }
    });
    this.updateGlobals();
  }

  // DONE
  subscribe = (component) => {
    const { name } = component.props;
    if (name) {
      if (!this.subscribers[name]) {
        this.subscribers[name] = [];
      }
      if (!this.subscribers[name].includes(component)) {
        this.subscribers[name].push(component);
      }
    } else if (!this.globals.includes(component)) {
      this.globals.push(component);
    }
  }

  // DONE
  resetForm = () => {
    this.hasErrors = false;
    this.isDirt = false;
    Object.keys(this.inputs).forEach(
      key => this.resetInput(this.inputs[key]),
    );
    this.updateGlobals();
  }

  // DONE
  resetInput = (input) => {
    const { name } = input.props;
    this.errors[name] = [];
    this.values[name] = undefined;
    const inputState = {
      errors: [],
      hasErrors: false,
      isDirt: false,
      value: undefined,
    };
    if (this.subscribers[name]) {
      this.subscribers[name].forEach(
        subscriber => subscriber.setState(inputState),
      );
    }
    input.setState(inputState);
  }

  // DONE
  updateGlobals() {
    const errorList = Object.keys(this.errors).reduce(
      (list, key) => list.concat(this.errors[key]), [],
    );
    const formState = {
      errors: errorList,
      errorHash: this.errors,
      hasErrors: errorList.length > 0,
      isDirt: this.isDirt,
      values: this.values,
    };
    this.globals.forEach(subscriber => subscriber.setState(formState));
  }

  render() {
    const { children } = this.props;
    return (
      <FormContext.Provider
        value={{
          errors: this.errors,
          inputs: this.inputs,
          registerInput: this.registerInput,
          resetForm: this.resetForm,
          resetValue: this.resetValue,
          subscribers: this.subscribers,
          subscribe: this.subscribe,
          setValue: this.setValue,
          validateInputs: this.validateInputs,
          values: this.values,
        }}
      >
        {children}
      </FormContext.Provider>
    );
  }
}

export const { Consumer } = FormContext;
