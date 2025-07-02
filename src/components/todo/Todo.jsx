import TodoList from './TodoList.jsx'
import TodoForm from './TodoForm.jsx'


const Todo = ({ filteredTodos, handleAddTodo }) => (
  <div className='todo'>
    <TodoForm handleAddTodo={handleAddTodo} />
    <TodoList filteredTodos={filteredTodos} />
  </div>
);

export default Todo;