import TodoListItem from "./TodoListItem";

const todoList = [
  {
    id: 1,
    title: 'Complete week 1 assignment'
  },
  {
    id: 2,
    title: 'Complete week 2 assignment'
  },
  {
    id: 3,
    title: 'Complete week 3 assignment'
  }
];

const TodoList = () => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;