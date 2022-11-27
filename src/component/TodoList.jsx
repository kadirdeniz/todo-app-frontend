const TodoList = ({todos}) => {
    return  <div className="todo-list">
        {
            todos.length != 0 
                ? <ul id="todo-list">{todos.map(todo => <li id="todo-item" key={todo.id}>{todo.text}</li>)}</ul>
                :null
        }
    </div>;
}

export default TodoList