import React from 'react';
import { shallow } from 'enzyme';
import CommentForm from '../../components/CommentForm';

it('Renders correctly', () => {
  const wrapper = shallow(<CommentForm />);
  expect(wrapper).toMatchSnapshot();
});

it('Renders all fields', () => {
  const wrapper = shallow(<CommentForm />);
  const fields = wrapper.find('FormInput').length;
  expect(fields).toEqual(5);
});
