import React from 'react'

const TodosInput = ({ inputText, onInputChange, onAddTodoClick }) => (
  <div id="todos-input">
    <input
      type="text"
      value={inputText}
      onChange={onInputChange}
    />
    <button
      onClick={() => onAddTodoClick(inputText)}
    >Add todo!</button>
  </div>
);

export default TodosInput
