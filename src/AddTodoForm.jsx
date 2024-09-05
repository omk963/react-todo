import { useState } from 'react';
<<<<<<< HEAD
import style from './TodoListItem/TodoListItem.module.css'
=======
import InputWithLabel from './InputWithLabel';
>>>>>>> 5f22878ac82a99e52bfdf6923a0eefc4f0de6cbf

const AddTodoForm = ({ onAddTodo }) => {
    const [todoTitle, setTodoTitle] = useState('');

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };

    const handleAddTodo = (event) => {
        event.preventDefault();
        if (todoTitle === '') {
            alert("Please enter a valid to-do item");
            return;
        }
        console.log(todoTitle);
        onAddTodo({
            title: todoTitle,
            id: Date.now()
        });
        setTodoTitle('');
    };

    return (
        <form onSubmit={handleAddTodo}>
<<<<<<< HEAD
            <label className={style.title}>Title</label>
            <input className={style.todo} id='todoTitle' type='text' name='title' value={todoTitle} onChange={handleTitleChange} />
            <label htmlFor="todoTitle"></label>
            <button type="submit" className={style.addBtn}>Add</button>
=======
            <InputWithLabel id='todoTitle' value={todoTitle} onInputChange={handleTitleChange}>
                Title:
            </InputWithLabel>
            <button type="submit">Add</button>
>>>>>>> 5f22878ac82a99e52bfdf6923a0eefc4f0de6cbf
        </form>
    );
};

export default AddTodoForm;