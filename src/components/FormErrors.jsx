import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

const FormErrors = ({ errors }) => {
  if (errors && errors.length) {
    const items = errors.map(error => (
      <ListItem key={error}>
        {error}
      </ListItem>
    ));
    return (
      <div>
        <h2>
          Form Errors
        </h2>
        <List>
          {items}
        </List>
      </div>
    );
  }
  return null;
};

FormErrors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
};

FormErrors.defaultProps = {
  errors: undefined,
};

export default withFormContext(FormErrors);
