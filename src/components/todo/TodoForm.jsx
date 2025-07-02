const TodoForm = ({ handleAddTodo, newTodo, setNewTodo }) => (
  <form
    autoComplete='off'
    className='todo_form'
    onSubmit={(handleAddTodo)}
  >
    <input
      type='text'
      id='todo_input_id'
      name='todo_input'
      placeholder='What needs to be done?'
      value={newTodo}
      onChange={(event) => setNewTodo(event.target.value)}
    ></input>
  </form>
);

export default TodoForm;