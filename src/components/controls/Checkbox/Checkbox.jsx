import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CheckboxIcon from './CheckboxIcon';

const Container = styled.div`
  display: flex;
`;

const Label = styled.label`
  line-height: 30px;
  padding-left: .5rem;
`;

class Checkbox extends React.Component {
  handleOnClick = () => {
    const { onChange, value } = this.props;
    if (onChange) {
      onChange(!value);
    }
  }

  render() {
    const {
      id,
      label,
      name,
      value,
    } = this.props;
    return (
      <Container>
        <CheckboxIcon
          checked={value}
          height={30}
          onClick={this.handleOnClick}
        />
        <Label htmlFor={id}>
          {label}
        </Label>
        <input
          type="hidden"
          name={name}
          value={value}
        />
      </Container>
    );
  }
}

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.bool,
};

Checkbox.defaultProps = {
  id: undefined,
  label: undefined,
  onChange: undefined,
  value: false,
};

export default Checkbox;
