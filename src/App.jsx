import './App.css'
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './TodoList/TodoList';
import AddTodoForm from './AddTodoForm';

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
  }, [todoList]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  };

  const removeTodo = (id) => {
    const updatedList = todoList.filter(todo => todo.id !== id)
    setTodoList(updatedList)
  };

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