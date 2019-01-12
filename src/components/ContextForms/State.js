class State {
  errors = {};

  hasErrors = false;

  initialValues = {};

  inputs = {};

  isDirt = false;

  globals = [];

  subscribers = {};

  values = {};

  setValue = (name, value) => {
    if (!this.inputs[name]) throw new Error('Fuck, input not registered');
    const input = this.inputs[name];
    this.values[name] = value;
    const inputErrors = this.validateInput(name, value);
    if (inputErrors && inputErrors.length) {
      this.errors[name] = inputErrors;
    } else {
      delete this.errors[name];
    }
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
    input.setInputState(inputState);
  }

  setInitialValue = (name, value) => {
    const input = this.inputs[name];
    this.values[name] = value;
    this.initialValues[name] = value;
    const inputState = { value };
    input.setInputState(inputState);
  }

  getValue = name => this.values[name];

  validateInput = (name, value) => {
    // TODO: Check for undefined inputs
    // if (!this.inputs[field]) return undefined;
    const input = this.inputs[name];
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

  registerInput = (input) => {
    const { name, value } = input.props;
    if (!this.inputs[name]) {
      this.inputs[name] = input;
      this.setInitialValue(name, value);
    }
  }

  validateInputs = () => {
    Object.keys(this.inputs).forEach((name) => {
      const inputErrors = this.validateInput(
        name,
        this.values[name],
      );
      if (inputErrors) {
        this.hasErrors = true;
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
    return this.hasErrors;
  }

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

  resetForm = () => {
    this.hasErrors = false;
    this.isDirt = false;
    Object.keys(this.inputs).forEach(
      key => this.resetInput(this.inputs[key]),
    );
    this.updateGlobals();
  }

  resetInput = (input) => {
    const { name } = input.props;
    this.errors[name] = [];
    this.values[name] = this.initialValues[name];
    const inputState = {
      errors: [],
      hasErrors: false,
      isDirt: false,
      value: this.values[name],
    };
    if (this.subscribers[name]) {
      this.subscribers[name].forEach(
        subscriber => subscriber.setState(inputState),
      );
    }
    input.setState(inputState);
  }

  updateGlobals = () => {
    const errorList = Object.keys(this.errors).reduce(
      (list, key) => list.concat(this.errors[key]), [],
    );
    this.hasErrors = errorList.length > 0;
    const formState = {
      errors: errorList,
      errorHash: this.errors,
      hasErrors: this.hasErrors,
      isDirt: this.isDirt,
      values: this.values,
    };
    this.globals.forEach(subscriber => subscriber.setState(formState));
  }
}

export default State;
