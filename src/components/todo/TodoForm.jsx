import { useDispatch, useSelector } from "react-redux"
import { appendNewValueForCreate } from "../../redux/stackTodosSlice/stackTodosSlice";


export default function TodoForm({ handleAddTodo }) {
  const inputNewTodo = useSelector(state => state.stackTodos.inputNewTodo);
  const dispatch = useDispatch();

  return (
    <form
      autoComplete='off'
      className='todo_form'
      onSubmit={(handleAddTodo)}
    >
      <input
        type='text'
        className='todo_input'
        placeholder='What needs to be done?'
        value={inputNewTodo}
        onChange={(event) => dispatch(appendNewValueForCreate(event.target.value))}
      />
    </form>
  )
};
