import * as React from 'react';
import PropTypes from 'prop-types';
import Select from '../controls/Select';
import { formInput } from '../ContextForms';

class SelectInput extends React.Component {
  changeHandler = (event) => {
    const { setValue } = this.props;
    // const { setValue, onChange } = this.props;
    setValue(event.target.value);
    console.log('SELECT_INPUT', this.onChange);
    // onChange(event);
  }

  render() {
    return (
      <Select
        {...this.props}
        onChange={this.changeHandler}
      />
    );
  }
}

SelectInput.propTypes = {
  setValue: PropTypes.func.isRequired,
  onChange: PropTypes.func,
};

SelectInput.defaultProps = {
  onChange: undefined,
};

export default formInput(SelectInput);
