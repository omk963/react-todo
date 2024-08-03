import { useState } from 'react';

const AddTodoForm = ({ onAddTodo }) => {
    const [todoTitle, setTodoTitle] = useState('');

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };

    const handleAddTodo = (event) => {
        event.preventDefault();
        if(todoTitle === '') {
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
            <label>Title</label>
            <input id='todoTitle' type='text' name='title' value={todoTitle} onChange={handleTitleChange} />
            <label htmlFor="todoTitle"></label>
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodoForm;