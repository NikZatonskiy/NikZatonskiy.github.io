import TodoList from './TodoList.jsx'
import TodoForm from './TodoForm.jsx'
import { Box } from '@mui/material'

const Todo = () => (
  <Box
    component='div'
    className='todo'
  >
    <TodoForm />
    <TodoList />
  </Box>
);

export default Todo;