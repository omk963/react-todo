import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';

const TodoListItem = ({ todo, onRemoveTodo }) => {
    return (
        <>
            <li className={style.listItem}>
                {todo.title}
            </li>
            <button key={todo.id} className={style.deleteBtn} onClick={() => onRemoveTodo(todo.id)}>Delete</button>
        </>
    );
};

TodoListItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }),
    onRemoveTodo: PropTypes.func.isRequired
}

export default TodoListItem;