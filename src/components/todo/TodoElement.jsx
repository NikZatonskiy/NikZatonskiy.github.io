import { useDispatch } from "react-redux";
import { updateTodoStatus, removeTodo } from "../../redux/stackTodosSlice/stackTodosSlice";
import { setCurrentTodo } from "../../redux/newValueTodoSlice/newValueTodoSlice";


export default function TodoElement({ elementTodo, index }) {
  const dispatch = useDispatch();

  return (<li
    id={index}
    is-complete={elementTodo.isComplete.toString()}
    className={elementTodo.isComplete ? "complete-li" : "active-li"}
  >
    <div className='list-div'>
      <input
        type='checkbox'
        id={index}
        checked={elementTodo.isComplete}
        onChange={() => dispatch(updateTodoStatus(index))}
      ></input>
      <span
        id={index}
        onDoubleClick={(event) => dispatch(setCurrentTodo({todoId: index, todoValue: event.target?.innerText}))}
      >
        {elementTodo.value}
      </span>
      <button
        id={index}
        onClick={() => dispatch(removeTodo(index))}
      >
        Удалить
      </button>
      <div className='hidden-div'></div>
    </div>
  </li>
  )
}
