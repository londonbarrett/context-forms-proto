import * as React from 'react';
import PropTypes from 'prop-types';
import State from './State';

const forms = {};

const getFormState = (name) => {
  if (!forms[name]) forms[name] = new State();
  return forms[name];
};

export const Context = React.createContext({});

export const Provider = ({ children, formName }) => (
  <Context.Provider value={getFormState(formName)}>
    {children}
  </Context.Provider>
);

Provider.propTypes = {
  children: PropTypes.element.isRequired,
  formName: PropTypes.string.isRequired,
};

export const { Consumer } = Context;
