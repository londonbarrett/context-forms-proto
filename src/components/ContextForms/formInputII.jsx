import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';

/* eslint-disable-next-line */
const formInputII = Component => class FormInput extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const elementsTree = super.render();
    const newProps = {
      carechimba: 'weeeeee',
    };
    if (elementsTree && elementsTree.type === 'input') {
      newProps.value = 'new value';
    }
    const props = Object.assign({}, elementsTree.props, newProps);
    const NewElementsTree = React.cloneElement(
      elementsTree,
      props,
      elementsTree.props.children,
    );
    return (
      <Consumer>
        { context => (
          <NewElementsTree.type
            {...props}
            value={context.iiGetValue(props)}
            onChange={context.iiHandleChange(this)}
          />
        )}
      </Consumer>
    );
  }
};

export default formInputII;
