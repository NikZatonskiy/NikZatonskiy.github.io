import { useDispatch } from "react-redux";
import { updateTodoStatus, removeTodo, setCurrentTodo } from "../../redux/stackTodosSlice/stackTodosSlice";


export default function TodoElement({ elementTodo, id }) {
  const dispatch = useDispatch();

  return (<li
    id={id}
    is-complete={elementTodo.isComplete.toString()}
    className={elementTodo.isComplete ? "complete-li" : "active-li"}
  >
    <div className='list-div'>
      <label className='custom-container'>
        <input
          type='checkbox'
          id={id}
          checked={elementTodo.isComplete}
          onChange={() => dispatch(updateTodoStatus(id))}
        />
        <span className='custom-checkmark'></span>
      </label>
      <span
        id={id}
        onDoubleClick={(event) => {
          dispatch(setCurrentTodo({id: id, value: event.target?.innerText}));
        }}
      >
        {elementTodo.value}
      </span>
      <button
        id={id}
        onClick={() => dispatch(removeTodo(id))}
      >
        Удалить
      </button>
      <div className='hidden-div'></div>
    </div>
  </li>
  )
}
