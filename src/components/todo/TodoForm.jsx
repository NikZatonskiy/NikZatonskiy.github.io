import { useState } from 'react'

export default function TodoForm({ stackTodos, changeStack }) {
  const [valueInput, setValueInput] = useState('');

  function handleAddTodo(event) {
    event.preventDefault();

    if (!valueInput.trim()) {
      return;
    };

    const newTodo = {value: valueInput, isComplete: false};
    
    changeStack([...stackTodos, newTodo]);
    setValueInput("");
  }

  return (
    <form autoComplete='off' className='todo_form' onSubmit={handleAddTodo}>
      <input
        type='text'
        id='todo_input_id'
        name='todo_input'
        placeholder='What needs to be done?'
        value={valueInput}
        onChange={(event) => setValueInput(event.target.value)}
      ></input>
    </form>
  );
}