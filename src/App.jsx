import './App.css'
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './components/TodoList/TodoList';
import AddTodoForm from './components/AddTodoForm';

function App() {
  const [todoList, setTodoList] = useState([]);

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
      const todos = data.records.map((todo) => {
        const newTodo = {
          id: todo.id,
          title: todo.fields.title
        };
        return newTodo;
      });
      setTodoList(todos);
    } catch (err) {
      console.error();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const addTodo = (newTodo) => {
  //   setTodoList([...todoList, newTodo])
  // };

  const addTodo = async (newTodoTitle) => {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
        },
        body: JSON.stringify(newTodoTitle)
      };
      const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;

      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      const newTodo = {
        id: data.id,
        title: data.fields.title
      }
      setTodoList(prevList => [...prevList, newTodo]);
    } catch (err) {
      console.error('Error:', err.message);
    }
  }

  // const removeTodo = (id) => {
  //   const updatedList = todoList.filter(todo => todo.id !== id)
  //   setTodoList(updatedList)
  // };

  const removeTodo = async (id) => {
    try {
      const options = {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
        }
      };
      const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}/${id}`;

      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const updatedList = todoList.filter(todo => todo.id !== id);
      setTodoList(updatedList);
    } catch (err) {
      console.error('Error:', err.message);
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element=
          {<React.Fragment>
            <h1>Todo-List</h1>
            <AddTodoForm onAddTodo={addTodo} />
            <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
          </React.Fragment>}
        />
        <Route
          path='/new'
          element={
            <h1>New Todo List</h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;