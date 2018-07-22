import React from 'react';
import { shallow } from 'enzyme';
import { render, fireEvent } from 'react-testing-library';
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

it('Submits form, and receive values', () => {
  const handleOnSubmit = jest.fn();
  const { getByText } = render(
    <CommentForm
      firstName="Joe"
      lastName="Strummer"
      age="66"
      accept
      rating={5}
      onSubmit={handleOnSubmit}
    />,
  );
  const submit = getByText(
    (content, element) => element.getAttribute('type') === 'submit',
  );
  fireEvent(submit, new MouseEvent('click'));
  expect(handleOnSubmit).toBeCalledWith({
    firstName: 'Joe',
    lastName: 'Strummer',
    age: '66',
    accept: true,
    rating: 5,
  });
});

it('Doesnt submit form', () => {
  const handleOnSubmit = jest.fn();
  const { getByText } = render(
    <CommentForm
      firstName="Joe"
      lastName="Strummer"
      age="666"
      accept
      rating={5}
      onSubmit={handleOnSubmit}
    />,
  );
  const submit = getByText(
    (content, element) => element.getAttribute('type') === 'submit',
  );
  fireEvent(submit, new MouseEvent('click'));
  expect(handleOnSubmit).not.toBeCalled();
});
