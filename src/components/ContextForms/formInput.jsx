import { get } from 'lodash';
import * as React from 'react';
import PropTypes from 'prop-types';
import { Context } from './Context';

const formInput = (
  { valuePath = 'target.value' } = {},
) => Component => class FormInput extends React.Component {
  static contextType = Context;

  static propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onChange: undefined,
  };

  state = {};

  componentDidMount = () => {
    // TODO: check unmount case
    const { registerInput } = this.context;
    registerInput(this);
  }

  setInputState = (state) => {
    this.setState({ ...state });
  }

  handleChange = (event) => {
    const { setValue } = this.context;
    const { name, onChange } = this.props;
    const value = get(event, valuePath, event);
    setValue(name, value);
    if (onChange) {
      onChange({
        context: this.context,
        name,
        value,
      });
    }
  };

  render() {
    const {
      errors, hasErrors, isDirt, value,
    } = this.state;
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
  }
};

export default formInput;
