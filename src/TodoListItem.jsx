import React from "react";

const TodoListItem = ({todo, onRemoveTodo}) => {
    return (
        <React.Fragment>
            <li>{todo.title}</li>
            <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
        </React.Fragment>
    );
};

export default TodoListItem;