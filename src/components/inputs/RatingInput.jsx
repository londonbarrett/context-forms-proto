import * as React from 'react';
import PropTypes from 'prop-types';
import Rating from '../controls/Rating';
import { formInput } from '../ContextForms';

class RatingInput extends React.Component {
  handleOnChange = (value) => {
    const { setValue } = this.props;
    setValue(value);
  }

  render() {
    return (
      <Rating
        {...this.props}
        onChange={this.handleOnChange}
      />
    );
  }
}

RatingInput.propTypes = {
  setValue: PropTypes.func.isRequired,
};

export default formInput(RatingInput);
