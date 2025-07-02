const TodoElement = ({ elementTodo, index, stackTodos, changeStack, setCurrentTextTodo }) => (
  <li
    id={index}
    is-complete={elementTodo.isComplete.toString()}
    className={elementTodo.isComplete ? "complete-li" : "active-li"}
  >
    <div className='list-div'>
      <input
        type='checkbox'
        id={index}
        checked={elementTodo.isComplete}
        onChange={() => {
          const newStack = structuredClone(stackTodos);
          const elementTodo = newStack.at(index);
      
          elementTodo.isComplete = !elementTodo.isComplete;
          changeStack(newStack);
        }}
      ></input>
      <span
        id={index}
        onDoubleClick={(event) => setCurrentTextTodo({id: index, value: event.target?.innerText})}
      >
        {elementTodo.value}
      </span>
      <button
        id={index}
        onClick={() => {
          const newStack = structuredClone(stackTodos);

          newStack.splice(index, 1);
          changeStack(newStack);
        }}
      >
        Удалить
      </button>
      <div className='hidden-div'></div>
    </div>
  </li>
);

export default TodoElement;