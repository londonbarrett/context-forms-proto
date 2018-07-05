import * as React from 'react';
import styled from 'styled-components';
import { withFormContext } from './Forms';

const List = styled.ul`
  list-style-position: inside;
  margin-top: .5rem;
  padding-left: 1rem;
  text-align: left;
`;

const ListItem = styled.li`
  font-size: .7rem;
`;

const FieldError = ({ name, errors }) => {
  if (errors) {
    const items = errors.map(error =>
      <ListItem key={error}>{error}</ListItem>
    )
    return (
      <List>{items}</List>
    );
  }
  return null;
}

export default withFormContext(FieldError);
