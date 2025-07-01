import { useState } from "react";

export default function Modal({ currentTextTodo, setCurrentTextTodo, stackTodos, changeStack }) {
  const [valueInput, setValueInput] = useState('');
  const display = currentTextTodo.id != null ? "flex" : "none"

  function handleKeydown(event) {
    if (event.key === "Enter" && valueInput.trim()) {
      const newStack = structuredClone(stackTodos);

      newStack[currentTextTodo.id] = ({value: valueInput, isComplete: false});
      changeStack(newStack);

      closeModal(event, true);
    }
  }

  function closeModal(event, isKeydown = false) {
    event.stopPropagation();
       
    const isMouseClick = event.target?.type == "textarea" || event.target?.className == "modal-window"

    if (isMouseClick && !isKeydown) {
        return;
    };

    setCurrentTextTodo({id: null, value: ""});
  }

  return (
    <div className='modal-background' style={{display: display}} onClick={closeModal}>
      <div className='modal-window'>
        <textarea defaultValue={currentTextTodo.value} onChange={(event) => setValueInput(event.target.value)} onKeyDown={handleKeydown}></textarea>
      </div>
    </div>
  );
}