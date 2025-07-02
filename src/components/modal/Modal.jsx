const Modal = ({ currentTextTodo, setValueForUpdateTodo, closeModal, handleKeydown }) => (
  <div className='modal-background' style={{display: currentTextTodo.id != null ? "flex" : "none"}} onClick={closeModal}>
    <div className='modal-window'>
      <textarea defaultValue={currentTextTodo.value} onChange={(event) => setValueForUpdateTodo(event.target.value)} onKeyDown={handleKeydown}></textarea>
    </div>
  </div>
);

export default Modal;