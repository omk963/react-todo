import './App.css'
import React from 'react';
import { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({data: {todoList: JSON.parse(localStorage.getItem('savedTodoList')) || []}})
      }, 2000)
    }).then((result) => {
      const {data} = result
      setTodoList(data.todoList)
      setIsLoading(false)
    })
  }, [])

  const fetchData = async () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
      }
    };
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      const todos = data.records.map((arr) => {
        const newTodo = {
          id: arr.id,
          title: arr.fields.title
        };
        return newTodo;
      });
      setTodoList(todos);
      setIsLoading(false);
    } catch (err) {
      console.error();
    }
  };

  useEffect(() => {
    fetchData();
  }, [todoList, isLoading]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  };

  const removeTodo = (id) => {
    const updatedList = todoList.filter(todo => todo.id !== id)
    setTodoList(updatedList)
  };

  return (
    <React.Fragment>
      <h1>Todo-List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
    </React.Fragment>
  );
};

export default App;
