const TodoForm = ()=>{
    return <form id="todo-form">
        <label htmlFor="todo-input">Todo</label>
        <input type="text" id="todo-input" />
        <button type="submit" id="todo-create-button">Add</button>
    </form>
}

export default TodoForm