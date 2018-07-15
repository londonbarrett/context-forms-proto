import * as React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  background: #00BFAC;
  border: none;
  border-radius: 1rem;
  color: #FFF;
  font-size: 1rem;
  line-height: 2rem;
  margin-right: 1rem;
  padding: .5rem 2rem;
`;

const Reset = () => (
  <Input type="reset" />
);

export default Reset;
