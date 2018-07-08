import * as React from 'react';
import styled from 'styled-components';
import { formInput } from './Forms';
import CheckboxIcon from './CheckboxIcon';

const Container = styled.div`
  display: flex;
`;

const Label = styled.label`
  line-height: 30px;
  padding-left: .5rem;
`;

class CheckboxInput extends React.Component {
  state = { checked: false };

  onClick = () => {
    const { update } = this.props;
    const { checked } = this.state;
    this.setState({ checked: !checked });
    update(!checked);
  }

  render() {
    const {
      label,
      id,
      hasErrors,
      isDirt,
      name,
      validators,
    } = this.props;
    const { checked } = this.state;
    return (
      <Container>
        <input
          id={id}
          type="hidden"
          name={name}
          onInput={this.onInput}
          validators={validators}
        />
        <CheckboxIcon
          checked={checked}
          height={30}
          onClick={this.onClick}
        />
        <Label htmlFor={id}>
          {label}
        </Label>
      </Container>
    );
  }
}

export default formInput(CheckboxInput);
