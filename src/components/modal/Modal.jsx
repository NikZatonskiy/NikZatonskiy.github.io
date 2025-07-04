import { useDispatch, useSelector } from "react-redux";
import { updateTodo, appendNewValueForUpdate, clearSelectedTodo } from '../../store/slice/stackTodosSlice.jsx'

export default function Modal() {
  const selectedTodo = useSelector(state => state.stackTodos.selectedTodo);
  const dispatch = useDispatch();

  const closeModal = (event, isKeydown = false) => {
    event.stopPropagation();

    if ((event.target?.type == "textarea" || event.target?.className == "modal-window") && !isKeydown) {
      return;
    };

    dispatch(clearSelectedTodo());
  };

  return (
    <div
      className='modal-background'
      style={{display: selectedTodo?.id != null ? "flex" : "none"}}
      onClick={closeModal}
    >
      <div className='modal-window'>
        <textarea
          value={selectedTodo?.value}
          onChange={(event) => dispatch(appendNewValueForUpdate(event.target.value))}
          onKeyDown={(event) => {
            if (event.key === "Enter" && selectedTodo.value.trim()) {
              dispatch(updateTodo({todoId: selectedTodo.id, newTodoValue: selectedTodo.value}));
              closeModal(event, true);
            }
          }} />
      </div>
    </div>
  );
};
