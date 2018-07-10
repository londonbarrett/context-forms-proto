import * as React from 'react';
import styled from 'styled-components';
import { formInput } from './Forms';

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

class TextInput extends React.Component {
  onInput = (event) => {
    const { setValue } = this.props;
    setValue(event.target.value);
  }

  render() {
    const {
      id,
      hasErrors,
      isDirt,
      label,
      name,
      validators,
    } = this.props;
    return (
      <Input
        type="text"
        id={id}
        hasErrors={hasErrors}
        isDirt={isDirt}
        name={name}
        onInput={this.onInput}
        validators={validators}
      />
    );
  }
}

export default formInput(TextInput);
