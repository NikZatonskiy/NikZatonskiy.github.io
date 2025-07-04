import { useDispatch, useSelector } from "react-redux";
import { updateTodo, appendNewValueForUpdate, clearCurrentTodo } from '../../redux/stackTodosSlice/stackTodosSlice.jsx'


export default function Modal() {
  const currentTodo = useSelector(state => state.stackTodos.currentTodo);
  const dispatch = useDispatch();

  const closeModal = (event, isKeydown = false) => {
    event.stopPropagation();

    if ((event.target?.type == "textarea" || event.target?.className == "modal-window") && !isKeydown) {
        return;
    };

    dispatch(clearCurrentTodo());
  };

  return (
    <div
      className='modal-background'
      style={{display: currentTodo?.id != null ? "flex" : "none"}}
      onClick={closeModal}
    >
      <div className='modal-window'>
        <textarea
          value={currentTodo?.value}
          onChange={(event) => dispatch(appendNewValueForUpdate(event.target.value))}
          onKeyDown={(event) => {
            if (event.key === "Enter" && currentTodo.value.trim()) {
              dispatch(updateTodo({todoId: currentTodo.id, newTodoValue: currentTodo.value}));
              closeModal(event, true);
            }
          }}></textarea>
      </div>
    </div>
  );
};
