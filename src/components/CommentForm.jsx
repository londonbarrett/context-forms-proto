import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, validators } from './ContextForms';
import TextfieldInput from './inputs/TextfieldInput';
import CheckboxInput from './inputs/CheckboxInput';
import FieldError from './FieldError';
import RatingInput from './inputs/RatingInput';
import Reset from './Reset';
import Submit from './Submit';
import FormErrors from './FormErrors';

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

class CommentForm extends React.Component {
  handleOnSubmit = (values) => {
    /* eslint-disable-next-line */
    console.log(values);
  }

  render() {
    const {
      firstName,
      lastName,
      age,
      accept,
      rating,
    } = this.props;
    return (
      <StyledForm
        onSubmit={this.handleOnSubmit}
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
            value={firstName}
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
            value={lastName}
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
            value={age}
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
            value={accept}
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
            value={rating}
          />
        </Field>
        <FormErrors />
        <Actions>
          <Reset />
          <Submit value="Send" />
        </Actions>
      </StyledForm>
    );
  }
}

CommentForm.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
  accept: PropTypes.bool,
  rating: PropTypes.number,
};

CommentForm.defaultProps = {
  firstName: undefined,
  lastName: undefined,
  age: undefined,
  accept: undefined,
  rating: undefined,
};

export default CommentForm;
