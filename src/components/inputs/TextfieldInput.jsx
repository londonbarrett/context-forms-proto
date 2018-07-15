import * as React from 'react';
import PropTypes from 'prop-types';
import Textfield from '../controls/Textfield';
import { formInput } from '../ContextForms';

class TextFieldInput extends React.Component {
  handleOnChange = (event) => {
    const { setValue } = this.props;
    setValue(event.target.value);
  }

  render() {
    return (
      <Textfield
        {...this.props}
        onChange={this.handleOnChange}
      />
    );
  }
}

TextFieldInput.propTypes = {
  setValue: PropTypes.func.isRequired,
};

export default formInput(TextFieldInput);
