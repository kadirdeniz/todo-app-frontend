import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  return <div className="todo" id="todo">
    <TodoForm setTodos={setTodos}/>
    <TodoList todos={todos}/>
  </div>;
};

export default Todo;
