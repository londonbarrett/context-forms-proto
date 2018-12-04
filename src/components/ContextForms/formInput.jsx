import { get } from 'lodash';
import * as React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';

const formInput = (
  { valuePath = 'target.value' } = {},
) => Component => class FormInput extends React.Component {
  context = {};

  static propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onChange: undefined,
  };

  state = {};

  handleChange = (event) => {
    const { setValue } = this.context;
    const { onChange } = this.props;
    const value = get(event, valuePath, event);
    setValue(this, value);
    if (onChange) onChange(event);
  };

  render() {
    const {
      errors, hasErrors, isDirt, value,
    } = this.state;
    return (
      <Consumer>
        {(context) => {
          this.context = context;
          context.registerInput(this);
          return (
            <Component
              {...this.props}
              errors={errors}
              hasErrors={hasErrors}
              isDirt={isDirt}
              value={value}
              onChange={this.handleChange}
            />
          );
        }}
      </Consumer>
    );
  }
};

export default formInput;
