import { useDispatch, useSelector } from "react-redux";
import { appendNewValue } from "../../redux/newValueTodoSlice/newValueTodoSlice";

export default function Modal({ closeModal, handleKeydown }) {
  const newValueTodo = useSelector(state => state.newValueTodo);
  const dispatch = useDispatch();
  
  return (
    <div className='modal-background' style={{display: newValueTodo.id != null ? "flex" : "none"}} onClick={closeModal} onKeyDown={(event) => closeModal(event, true)}>
      <div className='modal-window'>
        <textarea defaultValue={newValueTodo.value} onChange={(event) => dispatch(appendNewValue(event.target.value))} onKeyDown={handleKeydown}></textarea>
      </div>
    </div>
  );
};
