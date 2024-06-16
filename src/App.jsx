import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Todo-List</h1>
      <ul>
        {todoList.map((todo) => {
          return (
            <li>{`${todo.id}) ${todo.title}`}</li>
          );
        })}
      </ul>
    </>
  )
}

export default App
