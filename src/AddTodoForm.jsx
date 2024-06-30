const AddTodoForm = ({ onAddTodo }) => {
    const handleAddTodo = (event) => {
        event.preventDefault();
        const todoTitle = event.target.elements.title.value;
        console.log(todoTitle);
        onAddTodo(todoTitle);
        event.target.elements.title.value = '';
    };

    return (
        <form onSubmit={handleAddTodo}>
            <label>Title</label>
            <input id='todoTitle' type='text' name='title' />
            <label htmlFor="todoTitle"></label>
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodoForm;