import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../pages/quote';

it('renders correctly', () => {
  const tree = renderer
    .create(<Quote ></Quote>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});