import React from 'react'
import Todo from './Todo'
import './todos.css'

const Todos = (props) => {
  return (
      <section className='todos'>
      {props.todos.map((todo) => <Todo key={todo.id} todo={todo.todo} id={todo.id} onRemvItem={props.onRemoveTodo} />)}
    </section>
  )
}

export default Todos