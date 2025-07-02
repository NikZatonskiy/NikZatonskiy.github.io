import TodoList from './TodoList.jsx'
import TodoForm from './TodoForm.jsx'


const Todo = ({ stackTodos, changeStack, filteredTodos, setCurrentTextTodo, handleAddTodo, newTodo, setNewTodo }) => (
  <div className='todo'>
    <TodoForm handleAddTodo={handleAddTodo} newTodo={newTodo} setNewTodo={setNewTodo} />
    <TodoList stackTodos={stackTodos} changeStack={changeStack} filteredTodos={filteredTodos} setCurrentTextTodo={setCurrentTextTodo} />
  </div>
);

export default Todo;