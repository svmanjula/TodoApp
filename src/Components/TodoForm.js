import React from "react";

const TodoForm = ({handleSubmit, input, setInput, editId}) => (
  <form className="todoForm" onSubmit={handleSubmit}>
    <input value={input} onChange={(e) => setInput(e.target.value)} />
    <button type="submit">{editId ? `Edit` : `Go`} </button>
  </form>
);

export default TodoForm;
