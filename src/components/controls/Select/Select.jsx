import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSelect = styled.select`
  appearance: none;
  background: ${({ hasErrors }) => (hasErrors ? '#FF544C' : '#FFF')}
  border: none;
  border-radius: 1rem;
  color: ${({ hasErrors }) => (hasErrors ? '#FFF' : '#007367')}
  font-size: 1rem;
  height: 3rem;
  line-height: 2rem;
  padding: .5rem 1rem;
  width: 100%;
`;

class Select extends React.Component {
  handleOnChange = (event) => {
    const { onChange } = this.props;
    onChange(event);
  }

  render() {
    const { options, value } = this.props;
    return (
      <StyledSelect
        {...this.props}
        onChange={this.handleOnChange}
        value={value}
      >
        {options.map(option => (
          <option
            value={option.value}
            key={option.value}
          >
            {option.label}
          </option>
        ))}
      </StyledSelect>
    );
  }
}

Select.propTypes = {
  hasErrors: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    data: PropTypes.any,
    label: PropTypes.string.isRequired,
    value: PropTypes.any,
  })),
  value: PropTypes.string,
};

Select.defaultProps = {
  hasErrors: false,
  onChange: undefined,
  options: [],
  value: '',
};

export default Select;
