import React, { useState } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

const App = () => {
  const [input, setInput] = useState("");
  const [allTodos, setAllTodos] = useState([]);
  const [editId, setEditId] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== "") {
      setAllTodos([...allTodos, { id: `${Date.now()}-${input}`, input }]);
      setInput("");
    }

    if (editId) {
      const updatedTodos = allTodos.map(
        (data) => data.id === editId && (data = { id: data.id, input })
      );

      setAllTodos(updatedTodos);
      setEditId(0);
      setInput("");
    }
  };

  const handleDelete = (id) => {
    const updatedArr = allTodos.filter((data) => data.id !== id);
    setAllTodos([...updatedArr]);
  };

  const handleEdit = (id) => {
    const editedTodo = allTodos.find((data) => data.id === id);
    setInput(editedTodo.input);
    setEditId(editedTodo.id);
  };

  return (
    <div className="App">
      <div className="container">
        Todo List App
        <TodoForm
          handleSubmit={handleSubmit}
          input={input}
          setInput={setInput}
          editId={editId}
        />
        <TodoList
          allTodos={allTodos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;
