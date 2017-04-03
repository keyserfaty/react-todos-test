import React from 'react'
import Todos from '../components/Todos'

class TodosContainerComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };

    this.onAddTodoClick = this.onAddTodoClick.bind(this);
  }

  onAddTodoClick(todo) {
    this.setState({
      todos: [
        ...this.state.todos,
        todo,
      ],
    });
  }

  render() {
    const { onAddTodoClick } = this;
    const { todos } = this.state;

    return (
      <Todos todos={todos} onAddTodoClick={onAddTodoClick} />
    );
  }
}

export default TodosContainerComponent
