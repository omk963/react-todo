import TodoListItem from "../TodoListItem/TodoListItem";
import style from './TodoList.module.css'

const TodoList = ({ todoList, onRemoveTodo }) => {
  return (
    <ul className={style.list}>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
      ))}
    </ul>
  );
};

export default TodoList;