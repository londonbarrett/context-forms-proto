import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';
import { Form, validators } from './components/Forms';
import TextInput from './components/TextInput';
import CheckboxInput from './components/CheckboxInput';
import FieldError from './components/FieldError';
import RatingInput from './components/RatingInput';

const Header = styled.header`
  color: #00544C;
  height: 150px;
  padding: 20px;
  text-align: center;
`;

const Spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Logo = styled.img`
  animation: ${Spin} infinite 20s linear;
  height: 80px;
`;

const StyledForm = styled(Form)`
  margin: 4rem auto;
  width: 400px;
`;

const Field = styled.div`
  margin: 1rem 0;
`;

const Label = styled.label`
  color: #007367;
  display: block;
  font-size: 1.3rem;
  margin: 1rem 0;
  text-align: left;
`;

const Actions = Field.extend`
  margin-top: 2rem;
  text-align: right;
`;

const Submit = styled.input`
  background: #00544C;
  border: none;
  border-radius: 1rem;
  color: #FFF;
  font-size: 1rem;
  line-height: 2rem;
  padding: .5rem 2rem;
`;

export const onSubmit = (data) => {
  console.log('submit', data.values);
};

const App = () => (
  <section>
    <Header>
      <Logo src={logo} alt="logo" />
      <h1>
        React Context Forms
      </h1>
    </Header>
    <div>
      <StyledForm onSubmit={onSubmit}>
        <Field>
          <Label htmlFor="firstName">
            First Name
          </Label>
          <TextInput
            id="firstName"
            name="firstName"
            validators={[
              validators.isNotEmpty('It is empty'),
            ]}
          />
          <FieldError name="firstName" />
        </Field>
        <Field>
          <Label htmlFor="lastName">
            Last Name
          </Label>
          <TextInput
            id="lastName"
            name="lastName"
            validators={[
              validators.isNotEmpty('It is empty'),
            ]}
          />
          <FieldError name="lastName" />
        </Field>
        <Field>
          <Label htmlFor="age">
            Age
          </Label>
          <TextInput
            id="age"
            name="age"
            validators={[
              validators.isNotEmpty('It is empty'),
              validators.isNumber('It is not a number'),
              validators.greaterThan(150)('You are not that old'),
            ]}
          />
          <FieldError name="age" />
        </Field>
        <Field>
          <Label htmlFor="accept">
            Terms & Conditions
          </Label>
          <CheckboxInput
            id="accept"
            label="Do you accept terms and contidions"
            name="accept"
          />
          <FieldError name="accept" />
        </Field>
        <Field>
          <Label htmlFor="rating">
            Rating
          </Label>
          <RatingInput
            id="rating"
            name="rating"
            validators={[
              validators.isRequired('This field is required'),
            ]}
          />
          <FieldError name="rating" />
        </Field>
        <FieldError name="age" />
        <Actions>
          <input type="reset" />
          <Submit type="submit" value="Send" />
        </Actions>
      </StyledForm>
    </div>
  </section>
);

export default App;
