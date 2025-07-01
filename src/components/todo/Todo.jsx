import TodoList from './TodoList.jsx'
import TodoForm from './TodoForm.jsx'


export default function Todo({ stackTodos, changeStack, filter, setCurrentTextTodo }) {
  return (
    <div className='todo'>
      <TodoForm stackTodos={stackTodos} changeStack={changeStack} />
      <TodoList stackTodos={stackTodos} changeStack={changeStack} filter={filter} setCurrentTextTodo={setCurrentTextTodo} />
    </div>
  );
}