import { useState } from 'react';
import style from './TodoListItem/TodoListItem.module.css'

const AddTodoForm = ({ onAddTodo }) => {
    const [todoTitle, setTodoTitle] = useState('');

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };

    const handleAddTodo = (event) => {
        event.preventDefault();
        console.log(todoTitle);
        onAddTodo({
            title: todoTitle,
            id: Date.now()
        });
        setTodoTitle('');
    };

    return (
        <form onSubmit={handleAddTodo}>
            <label className={style.title}>Title</label>
            <input className={style.todo} id='todoTitle' type='text' name='title' value={todoTitle} onChange={handleTitleChange} />
            <label htmlFor="todoTitle"></label>
            <button type="submit" className={style.addBtn}>Add</button>
        </form>
    );
};

export default AddTodoForm;