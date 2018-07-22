import React from 'react';
import { render } from 'enzyme';
import FormErrors from '../../components/FormErrors';

it('Renders correctly', () => {
  const wrapper = render(
    <FormErrors
      errors={[
        'error 1',
        'error 2',
        'error 3',
      ]}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});
