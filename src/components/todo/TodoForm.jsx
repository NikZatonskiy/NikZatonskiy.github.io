import { useDispatch, useSelector } from "react-redux"
import { appendNewValue } from "../../redux/inputNewTodoSlice/inputNewTodoSlice";

export default function TodoForm({ handleAddTodo }) {
  const inputNewTodo = useSelector(state => state.inputNewTodo.value);
  const dispatch = useDispatch();

  return (
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
        value={inputNewTodo}
        onChange={(event) => dispatch(appendNewValue(event.target.value))}
      ></input>
    </form>
  )
};
