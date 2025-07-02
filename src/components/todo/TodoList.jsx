import TodoElement from './TodoElement.jsx'

const TodoList = ({ filteredTodos }) => (
  <ul id='todo_list_id'>
    {filteredTodos.map((value) => (
      <TodoElement elementTodo={value} index={value.id} key={value.id} />
    ))}
  </ul>
);

export default TodoList;