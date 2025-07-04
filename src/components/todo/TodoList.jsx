import { useSelector } from 'react-redux'
import TodoElement from './TodoElement.jsx'

export default function TodoList() {
  const filteredTodos = useSelector(state => state.stackTodos.filteredTodos);

  return <ul>{filteredTodos.map((value) => (<TodoElement elementTodo={value} key={value.id} />))}</ul>
};
