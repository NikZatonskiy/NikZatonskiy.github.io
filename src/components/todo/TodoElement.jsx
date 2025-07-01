export default function TodoElement({ elementTodo, index, stackTodos, changeStack, setCurrentTextTodo }) {
    const liElementClassName = elementTodo.isComplete ? "complete-li" : "active-li" ;
  
    function handleChangesCheckbox() {
      const newStack = structuredClone(stackTodos);
      const elementTodo = newStack.at(index);
  
      elementTodo.isComplete = !elementTodo.isComplete;
      changeStack(newStack);
    }
  
    function handleRemoveTodo() {
      const newStack = structuredClone(stackTodos);

      newStack.splice(index, 1);
      changeStack(newStack);
    }
  
    return (
      <li id={index} is-complete={elementTodo.isComplete.toString()} className={liElementClassName}>
        <div className='list-div'>
          <input type='checkbox' id={index} checked={elementTodo.isComplete} onChange={handleChangesCheckbox}></input>
          <span id={index} onDoubleClick={(event) => setCurrentTextTodo({id: index, value: event.target?.innerText})}>{elementTodo.value}</span>
          <button id={index} onClick={handleRemoveTodo}>Удалить</button>
          <div className='hidden-div'></div>
        </div>
      </li>
    );
  }