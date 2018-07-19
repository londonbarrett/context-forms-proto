import * as React from 'react';
import PropTypes from 'prop-types';
import State from './State';

const state = new State();
const Context = React.createContext(state);

const Provider = ({ children }) => (
  <Context.Provider value={state}>
    {children}
  </Context.Provider>
);

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const { Consumer } = Context;
export { Provider };
