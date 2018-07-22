import React from 'react';
import { render } from 'enzyme';
import FieldError from '../../components/FieldError';

it('Renders correctly', () => {
  const wrapper = render(
    <FieldError
      errors={[
        'Error 1',
        'Error 2',
        'Error 3',
      ]}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});
