import React from 'react';
import { render } from 'enzyme';
import Submit from '../../components/Submit';

it('Renders correctly', () => {
  const wrapper = render(<Submit />);
  expect(wrapper).toMatchSnapshot();
});
