import React from 'react'
import renderer from 'react-test-renderer'

import TodosInput from '../../components/TodosInput'

it('should render a todos input component', () => {
  const tree = renderer.create(
    <TodosInput />
  ).toJSON();

  expect(tree).toMatchSnapshot()
});
