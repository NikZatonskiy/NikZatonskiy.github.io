import TodoElement from './TodoElement.jsx'

export default function TodoList({ stackTodos, changeStack, setCurrentTextTodo, filter}) {
  let filteredTodos;

  switch (filter) {
    case "active": {
      filteredTodos = stackTodos.filter(item => !item.isComplete);

      break;
    }
    case "completed": {
      filteredTodos = stackTodos.filter(item => item.isComplete);

      break;
    }
    default: {
      filteredTodos = stackTodos;
    }
  }

  return (
    <ul id='todo_list_id'>{
      filteredTodos.map((value, index) => 
        <TodoElement
          elementTodo={value}
          index={index}
          stackTodos={stackTodos}
          changeStack={changeStack}
          setCurrentTextTodo={setCurrentTextTodo}
          key={index}
        />
      )
    }</ul>
  );
}