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
          {
            <TodoContainer tableName={import.meta.env.VITE_TABLE_NAME} />
          }
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