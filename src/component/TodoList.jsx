const TodoList = ({todos}) => {
    return  <div className="todo-list">
        <ul>
            {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
        </ul>
    </div>;
}

export default TodoList