import React from 'react';
import { mount, render, shallow } from 'enzyme';
import AppHeader from '../../components/AppHeader';

it('Renders correctly', () => {
  const wrapper = shallow(<AppHeader />);
  expect(wrapper).toMatchSnapshot();
});

it('Renders header title', () => {
  const wrapper = mount(<AppHeader />);
  const title = wrapper.find('h1').text();
  expect(title).toEqual('React Context Forms');
});

it('Renders React logo', () => {
  const wrapper = render(<AppHeader />);
  const logo = wrapper.html();
  expect(logo).toMatch(/logo.svg/);
});

test('Logo has alt attribute', () => {
  const wrapper = render(<AppHeader />);
  const alt = wrapper.find('img').prop('alt');
  expect(alt.length).toBeGreaterThan(0);
});
