import * as React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../controls/Checkbox';
import { formInput } from '../ContextForms';

class CheckboxInput extends React.Component {
  handleOnChange = (value) => {
    const { setValue } = this.props;
    setValue(value);
  }

  render() {
    return (
      <Checkbox
        {...this.props}
        onChange={this.handleOnChange}
      />
    );
  }
}

CheckboxInput.propTypes = {
  setValue: PropTypes.func.isRequired,
};

export default formInput(CheckboxInput);
