import React from 'react'
import TodosInput from '../components/TodosInput'

class TodosInputContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({
      inputText: e.target.value,
    });
  }

  render() {
    const { inputText } = this.state;
    const { onInputChange } = this;
    const { onAddTodoClick } = this.props;

    return (
      <TodosInput inputText={inputText} onInputChange={onInputChange} onAddTodoClick={onAddTodoClick} />
    );
  }
}

export default TodosInputContainer
