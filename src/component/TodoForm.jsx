import { useState } from "react";
import { createTodo } from "../api/api";

const TodoForm = ({setTodos})=>{

    const BACKEND_URI = process.env.REACT_APP_BACKEND_URI;

    const [todo, setTodo] = useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault(); 
        const response = await createTodo(BACKEND_URI,todo);
        setTodos((prevTodos)=>[...prevTodos, response]);
        setTodo("");
    }

    const handleChange = (e)=>{
        setTodo(e.target.value);
    }

    return <form id="todo-form" onSubmit={handleSubmit}>
        <label htmlFor="todo-input">Todo</label>
        <input type="text" id="todo-input" value={todo} onChange={handleChange} />
        <button type="submit" id="todo-create-button">Add</button>
    </form>
}

export default TodoForm