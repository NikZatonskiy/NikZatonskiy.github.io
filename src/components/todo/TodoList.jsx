import { useSelector } from 'react-redux'
import TodoElement from './TodoElement.jsx'
import { List } from '@mui/material';
import { sxList } from './style.js';

export default function TodoList() {
  const filteredTodos = useSelector(state => state.stackTodos.filteredTodos);

  return (
    <List sx={sxList}>
      {filteredTodos.map((value) => (<TodoElement elementTodo={value} key={value.id} />))}
    </List>
  )
};
