import React from 'react'
import renderer from 'react-test-renderer'

import TodosContainer from '../../containers/TodosContainer'

it('should render a todos input component', () => {
  const tree = renderer.create(
    <TodosContainer />
  ).toJSON();

  expect(tree).toMatchSnapshot()
});
