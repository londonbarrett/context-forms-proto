import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  background: ${({ hasErrors }) => (hasErrors ? '#FF544C' : '#FFF')}
  border: none;
  border-radius: 1rem;
  color: ${({ hasErrors }) => (hasErrors ? '#FFF' : '#007367')}
  font-size: 1rem;
  line-height: 2rem;
  padding: .5rem 1rem;
  width: 100%;
`;

class Textfield extends React.PureComponent {
  render() {
    return (
      <Input
        {...this.props}
        type="text"
      />
    );
  }
}

Textfield.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

Textfield.defaultProps = {
  value: undefined,
};

export default Textfield;
