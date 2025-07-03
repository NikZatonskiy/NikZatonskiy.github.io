import TodoElement from './TodoElement.jsx'

const TodoList = ({ filteredTodos }) => (
  <ul>
    {filteredTodos.map((value) => (
      <TodoElement elementTodo={value} id={value.id} key={value.id} />
    ))}
  </ul>
);

export default TodoList;