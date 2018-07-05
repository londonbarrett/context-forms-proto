import * as React from 'react';
import { Provider } from './FormContext';

class Form extends React.Component {
  render() {
    const { children, className, onSubmit } = this.props;
    return (
      <Provider>
        <form
          onSubmit={onSubmit}
          className={className}>
          {children}
        </form>
      </Provider>
    );
  }
}

export default Form;

/**
 *
 * -
 *
 */
