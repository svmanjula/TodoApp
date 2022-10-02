import React from 'react'

function TodoList({allTodos, handleDelete, handleEdit}) {
  return (
<ul className="allTodos">
          {allTodos.map((data) => (
            <li  key={data.id}className="singleTodo">
              <span> {data.input}</span>
              <button onClick={() => handleEdit(data.id)}>Edit </button>
              <button onClick={() => handleDelete(data.id)}>Delete</button>
            </li>
          ))}
        </ul>  )
}

export default TodoList