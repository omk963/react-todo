import React from 'react'
import { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import PropTypes from 'prop-types';
import TodoList from './TodoList/TodoList';
import style from './TodoContainer.module.css'

const TodoContainer = ({ tableName }) => {
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, [tableName]);

    const fetchData = async () => {
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
            }
        };
        const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${tableName}?view=Grid%20view`;
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
            setIsLoading(false);
        } catch (err) {
            console.error('Error:', err.message);
        }
    };

    const sortList = () => {
        const sortedTodos = [...todoList].sort((a, b) => a.title.localeCompare(b.title));
        setTodoList(sortedTodos);
    };

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
            const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${tableName}`;

            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            const newTodo = {
                id: data.id,
                title: data.fields.title
            }
            setTodoList(prevList => {
                const updatedList = [...prevList, newTodo];
                // updatedList.sort((a, b) => a.title.localeCompare(b.title));
                return updatedList;
            });
        } catch (err) {
            console.error('Error:', err.message);
        }
    };

    const removeTodo = async (id) => {
        try {
            const options = {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
                }
            };
            const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${tableName}/${id}`;

            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            console.log('Deleted: ', data);
            const updatedList = todoList.filter(todo => todo.id !== id);
            setTodoList(updatedList);
        } catch (err) {
            console.error('Error:', err.message);
        }
    };

    return (
        <>
            <h1>{tableName}</h1>
            <div className={style.input}>
                <AddTodoForm onAddTodo={addTodo} />
                <button onClick={sortList} className={style.sortBtn}>Sort</button>
            </div>
            {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
        </>
    );
};

TodoContainer.propTypes = {
    tableName: PropTypes.string.isRequired
};

export default TodoContainer;