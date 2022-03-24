import Calculator from '../../components/Calculator';
import React from 'react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
      .create(<Calculator ></Calculator>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });