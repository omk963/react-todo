import TodoListItem from "./TodoListItem/TodoListItem";

const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;