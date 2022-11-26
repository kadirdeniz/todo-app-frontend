import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  return <div className="todo" id="todo">
    <TodoForm/>
    <TodoList todos={[]}/>
  </div>;
};

export default Todo;
