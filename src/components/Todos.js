import React from 'react'
import TodosInputContainer from '../containers/TodosInputContainer'

const Todos = ({ todos, onAddTodoClick }) => (
  <div id="todos-container">
    <TodosInputContainer onAddTodoClick={onAddTodoClick} />
    <div id="todos-list">
      <ul>
        { todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        )) }
      </ul>
    </div>
  </div>
);

export default Todos
