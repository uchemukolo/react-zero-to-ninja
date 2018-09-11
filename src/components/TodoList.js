import React from 'react'

const TodoList = props => {
  return (
    <ul>
      {props.todoItems.map(todo => (
        <li key={todo.date}>
          <p> Title : {todo.title}</p>
          <p>Date Created : {todo.date.toDateString()}</p>
          {todo.isCompleted === false && <p> completed : false </p>}
          {todo.isCompleted && <p> completed : true </p>}
          <button onClick={() => props.deleteTodo(todo.title)}>Delete</button>
          <button onClick={() => props.completeTodo(todo.id)}>Done</button>
        </li>
      ))}
    </ul>
  )
}
export default TodoList
