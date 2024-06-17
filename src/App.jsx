import './App.css'

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

function App() {
  return (
    <>
      <h1>Todo-List</h1>
      <ul>
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>{`${todo.title}`}</li>
          );
        })}
      </ul>
    </>
  )
}

export default App;
