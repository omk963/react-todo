import style from './TodoListItem.module.css';

const TodoListItem = ({ todo, onRemoveTodo }) => {
    return (
        <li className={style.listItem}>{todo.title}
            <button key={todo.id} className={style.deleteBtn} onClick={() => onRemoveTodo(todo.id)}>Delete</button>
        </li>
    );
};

export default TodoListItem;