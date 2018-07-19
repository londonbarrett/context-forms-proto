import * as React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';

const formInput = Component => class FormInput extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  state = {}

  setValue = context => value => context.setValue(this, value)

  render() {
    const { name } = this.props;
    const {
      errors,
      hasErrors,
      isDirt,
    } = this.state;
    return (
      <Consumer>
        { (context) => {
          context.registerInput(this);
          return (
            <Component
              {...this.props}
              errors={errors}
              hasErrors={hasErrors}
              isDirt={isDirt}
              setValue={this.setValue(context)}
              value={context.values[name]}
            />
          );
        }}
      </Consumer>
    );
  }
};

export default formInput;
