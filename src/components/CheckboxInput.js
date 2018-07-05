import * as React from 'react';
import styled from 'styled-components';
import { formInput } from './Forms';
import CheckboxIcon from './CheckboxIcon';

const Label = styled.label`
  height: 30px;
  line-height: 30px;
  vertical-align: top;
`

class CheckboxInput extends React.Component {
  state = {checked: false}
  onClick = (event) => {
    console.log('holi', this.state);
    const {onInput} = this.props;
    const {checked} = this.state;
    this.setState({checked: !checked})

    if (onInput) {
      onInput({value: checked});
    }
  }
  render() {
    const {
      label,
      id,
      hasErrors,
      isDirt,
      name,
      validators
    } = this.props;
    const {checked} = this.state;
    return (
      <Label htmlFor={id}>
        <input
          type="hidden"
          name={name}
          onInput={this.onInput}
          validators={validators}
        />
        <CheckboxIcon
          checked={checked}
          height="30"
          onClick={this.onClick}
        />
        <span>{label}</span>
      </Label>
    );
  }
}

export default formInput({
  valueProp: 'checked'
})(CheckboxInput);
