const AddTodoForm = () => {
    return (
        <>
            <form>
                <label>Title</label>
                <input id='todoTitle' type='text' />
                <label htmlFor="todoTitle"></label>
                <button>Add</button>
            </form>
        </>
    );
};

export default AddTodoForm;