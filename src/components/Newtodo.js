import React, { useState } from 'react'
import './newtodo.css'

const Newtodo = (props) => {
    const [todo, setTodo] = useState({ title: "", desc: "" })
    const {desc,title}=todo
    const handleChange = (event) => {
        const name = event.target.name
        setTodo((oldTodos) => {
            return {...oldTodos,[name]:event.target.value}
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.onAddTodo(todo)
        setTodo({title: "", desc: ""})
    }
    return (
      <form className='form' onSubmit={handleSubmit}>
      <div className='form-field'>
          <label htmlFor="title">Title : </label>
                <input type="text" id='title' name='title' onChange={handleChange} value={title} />
      </div>
      <div className='form-field'>
          <label htmlFor="desc">Description : </label>
                <textarea type="text" id='desc' name='desc' onChange={handleChange} value={desc} />
            </div>
        <button type='submit'>Add Todo</button>
            </form>
  )
}

export default Newtodo