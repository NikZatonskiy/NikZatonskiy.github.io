import { useDispatch, useSelector } from "react-redux"
import { appendNewValueForCreate, addTodo } from "../../store/slice/stackTodosSlice";

export default function TodoForm() {
  const inputNewTodo = useSelector(state => state.stackTodos.inputNewTodo);
  const dispatch = useDispatch();

  return (
    <form
      autoComplete='off'
      className='todo_form'
      onSubmit={(event) => {
        event.preventDefault();
        if (!inputNewTodo.trim()) return;
        dispatch(addTodo(inputNewTodo));
      }}
    >
      <input
        type='text'
        className='todo_input'
        placeholder='What needs to be done?'
        value={inputNewTodo}
        onChange={({ target }) => dispatch(appendNewValueForCreate(target.value))}
      />
    </form>
  )
};
