import React from 'react'
import TodoList from '../components/TodoList'

class Todo extends React.Component {
  constructor () {
    super()
    this.state = {
      todoItems: [],
      title: '',
      error: false,
      delete: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.finishTodo = this.finishTodo.bind(this)
  }
  handleChange (e) {
    this.setState({
      title: e.target.value
    })
  }
  handleSubmit (e) {
    e.preventDefault()
    const newTodo = {
      title: this.state.title,
      id: this.state.todoItems.length + 1,
      date: new Date(),
      isCompleted: false
    }
    console.log(newTodo)
    this.setState({
      todoItems: [...this.state.todoItems, newTodo],
      title: ''
    })
    console.log(this.state.todoItems)
  }
  removeTodo (title) {
    this.setState(currentState => {
      return {
        todoItems: currentState.todoItems.filter(todo => todo.title !== title)
      }
    })
  }
  finishTodo (id) {
    // const completedTodo = currentState.todoItems.filter((todo) => todo.title === title)
    // completedTodo.isCompleted
    // console.log(completedTodo)
    console.log(id)
    const items = [...this.state.todoItems]
    console.log(items)
    items[id - 1].isCompleted = true
    this.setState({
      todoItems: items
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add Title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
        <TodoList
          todoItems={this.state.todoItems}
          deleteTodo={this.removeTodo}
          completeTodo={this.finishTodo}
        />
      </div>
    )
  }
}
export default Todo
