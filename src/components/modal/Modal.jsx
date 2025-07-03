import { useDispatch, useSelector } from "react-redux";
// import { appendNewValue } from "../../redux/newValueTodoSlice/newValueTodoSlice";
// import { clearCurrentTodo } from '../../redux/newValueTodoSlice/newValueTodoSlice.jsx';
import { updateTodo, appendNewValueForUpdate, clearCurrentTodo } from '../../redux/stackTodosSlice/stackTodosSlice.jsx'

export default function Modal() {
  const newValueTodo = useSelector(state => state.stackTodos.currentTodo);
  const dispatch = useDispatch();

  const closeModal = (event, isKeydown = false) => {
    event.stopPropagation();
    
    const isMouseClick = event.target?.type == "textarea" || event.target?.className == "modal-window"

    if (isMouseClick && !isKeydown) {
        return;
    };

    dispatch(clearCurrentTodo());
  };

  return (
    <div
      className='modal-background'
      style={{display: newValueTodo.id != null ? "flex" : "none"}}
      onClick={closeModal}
    >
      <div className='modal-window'>
        <textarea
          value={newValueTodo.value}
          onChange={(event) => dispatch(appendNewValueForUpdate(event.target.value))}
          onKeyDown={(event) => {
            if (event.key === "Enter" && newValueTodo.value.trim()) {
              dispatch(updateTodo({todoId: newValueTodo.id, newTodoValue: newValueTodo.value}));
              closeModal(event, true);
            }
          }}></textarea>
      </div>
    </div>
  );
};
