import React from 'react'
import renderer from 'react-test-renderer'

import Todos from '../../components/Todos'

it('should render a todos component', () => {
  const todos = [
    'todo 1',
    'todo 2'
  ];

  const tree = renderer.create(
    <Todos todos={todos} />
  ).toJSON();

  expect(tree).toMatchSnapshot()
});
