import React from 'react'
import renderer from 'react-test-renderer'

import TodosInputContainer from '../../containers/TodosInputContainer'

it('should render a todos input component', () => {
  const tree = renderer.create(
    <TodosInputContainer />
  ).toJSON();

  expect(tree).toMatchSnapshot()
});
