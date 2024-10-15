import { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import style from './TodoListItem/TodoListItem.module.css'
import PropTypes from 'prop-types';

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
            fields: {
                title: todoTitle
            }
            // id: Date.now()
        });
        setTodoTitle('');
    };

    return (
        <form onSubmit={handleAddTodo} className={style.titleForm} >
            <InputWithLabel id='todoTitle' value={todoTitle} onInputChange={handleTitleChange}>
                Title:
            </InputWithLabel>
            <button type="submit" className={style.addBtn}>Add</button>
        </form>
    );
};

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired
}

export default AddTodoForm;