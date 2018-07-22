import React from 'react';
import { shallow } from 'enzyme';
import Reset from '../../components/Reset';

it('Renders correctly', () => {
  const wrapper = shallow(<Reset />);
  expect(wrapper).toMatchSnapshot();
});
