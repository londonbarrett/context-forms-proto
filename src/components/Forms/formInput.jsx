import * as React from 'react';
import { Consumer } from './FormContext';

const formInput = Component => class FormInput extends React.Component {
  state = {};

  setValue = context => value => context.setValue(this, value);

  render() {
    const { id, name } = this.props;
    const { hasErrors, isDirt } = this.state;
    return (
      <Consumer>
        { (context) => {
          context.registerInput(this);
          return (
            <Component
              id={id}
              name={name}
              setValue={this.setValue(context)}
              formErrors={context.errors}
              formValues={context.values}
              isDirt={isDirt}
              hasErrors={hasErrors}
              {...this.props}
            />
          );
        }
      }
      </Consumer>
    );
  }
};

export default formInput;
