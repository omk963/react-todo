import style from './TodoListItem.module.css';

const TodoListItem = (props) => {
    return (
        <li className={style.ListItem}>{props.todo.title}</li>
    );
};

export default TodoListItem;