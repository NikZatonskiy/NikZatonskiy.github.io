import TodoElement from './TodoElement.jsx'

const TodoList = ({ stackTodos, changeStack, setCurrentTextTodo, filteredTodos}) => (
  <ul id='todo_list_id'>
    {filteredTodos.map((value) => (
      <TodoElement
        elementTodo={value}
        index={stackTodos.findIndex(item => item.id === value.id)}
        stackTodos={stackTodos}
        changeStack={changeStack}
        setCurrentTextTodo={setCurrentTextTodo}
        key={value.id}
      />
    ))}
  </ul>
);

export default TodoList;