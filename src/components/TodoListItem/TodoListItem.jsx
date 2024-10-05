import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const TodoListItem = ({ todo, onRemoveTodo }) => {
    return (
        <>
            <li className={style.listItem}>
                {todo.title}
            </li>
            <button key={todo.id} className={style.deleteBtn} onClick={() => onRemoveTodo(todo.id)}>
                <FontAwesomeIcon icon={faTrashCan} style={{ color: "#ff0000", }} />
            </button>
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