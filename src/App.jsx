import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/new'
          element=
          {<React.Fragment>
            <TodoContainer tableName={import.meta.env.VITE_TABLE_NAME} />
            {/* <h1>Todo-List</h1>
            <AddTodoForm onAddTodo={addTodo} />
            <TodoList todoList={todoList} onRemoveTodo={removeTodo} /> */}
          </React.Fragment>}
        />
        <Route
          path='/'
          element={
            <a href="/new"><h1>Todo List</h1></a>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;