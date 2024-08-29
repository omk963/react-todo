import style from './TodoListItem.module.css';

const TodoListItem = ({ todo }) => {
    return (
        <li className={style.listItem}>{todo.title}</li>
    );
};

export default TodoListItem;