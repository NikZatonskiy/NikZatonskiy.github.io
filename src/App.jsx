import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Todo from './components/todo/Todo.jsx'
import { getFilteredTodos } from './store/slice/stackTodosSlice.jsx'
import './App.css'
import DownPanel from './components/DownPanel/DownPanel.jsx'
import Modal from './components/modal/modal.jsx'
import { Box } from '@mui/material';
import { sxHeader, sxMain } from './sx.js'

function App() {  
  const stackTodos = useSelector(state => state.stackTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.getItem("stack")) {
      localStorage.setItem("stack", JSON.stringify([]));
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem("stack", JSON.stringify(stackTodos.todos));
  }, [stackTodos.todos]);

  useEffect(() => { dispatch(getFilteredTodos()) }, [stackTodos.todos, stackTodos.flag]);

  return (
    <>
      <Box
        component='header'
        sx={sxHeader}
      >
        <h1>todos</h1>
      </Box>
      <Box
        component='main'
        sx={sxMain}
      >
        <Modal />
        <Todo />
        <DownPanel />
      </Box>
      <div className='background-page-1' />
      <div className='background-page-2' />
    </>
  );
}

export default App
