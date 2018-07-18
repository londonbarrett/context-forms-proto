import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';
import { Form, validators } from './components/ContextForms';
import TextfieldInput from './components/inputs/TextfieldInput';
import CheckboxInput from './components/inputs/CheckboxInput';
import FieldError from './components/FieldError';
import RatingInput from './components/inputs/RatingInput';
import Reset from './components/Reset';
import Submit from './components/Submit';
import FormErrors from './components/FormErrors';

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

const onSubmit = (values) => {
  console.log('submit', values);
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
      <StyledForm
        onSubmit={onSubmit}
        name="commentForm"
      >
        <Field>
          <Label htmlFor="firstName">
            First Name
          </Label>
          <TextfieldInput
            id="firstName"
            name="firstName"
            validators={[
              validators.isNotEmpty('First Name should not be empty'),
            ]}
            value="Andrepota"
          />
          <FieldError name="firstName" />
        </Field>
        <Field>
          <Label htmlFor="lastName">
            Last Name
          </Label>
          <TextfieldInput
            id="lastName"
            name="lastName"
          />
        </Field>
        <Field>
          <Label htmlFor="age">
            Age
          </Label>
          <TextfieldInput
            id="age"
            name="age"
            validators={[
              validators.isNotEmpty('Age should not be empty'),
              validators.isNumber('Age should be a number'),
              validators.greaterThan(150)('Age should be under 150'),
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
            validators={[
              validators.isRequired('Terms & Conditions must be accepted'),
            ]}
            value
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
              validators.isRequired('Rating field is required'),
            ]}
            value={3}
          />
        </Field>
        <FormErrors />
        <Actions>
          <Reset />
          <Submit value="Send" />
        </Actions>
      </StyledForm>
    </div>
  </section>
);

export default App;
