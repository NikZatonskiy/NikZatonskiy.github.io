import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Todo from './components/todo/Todo.jsx'
import { getFilteredTodos } from './store/slice/stackTodosSlice.jsx'
import './App.css'
import DownPanel from './components/DownPanel/DownPanel.jsx'
import Modal from './components/modal/modal.jsx'
import { Box } from '@mui/material';
import { sxDivPage1, sxDivPage2, sxHeader, sxMain } from './sx.js'

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
      <Box component='header' sx={sxHeader}>
        <h1>todos</h1>
      </Box>
      <Box component='main' sx={sxMain}>
        <Modal />
        <Todo />
        <DownPanel />
      </Box>
      <Box
        component='div'
        className='background-page-1'
        sx={sxDivPage1}
      />
      <Box
        component='div'
        className='background-page-2'
        sx={sxDivPage2}
      />
    </>
  );
}

export default App

// .background-page-1 {
//   background-color: var(--white-color);
//   height: 3px;
//   width: 39%;
//   margin: auto;
//   box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
// }

// .background-page-2 {
//   background-color: var(--white-color);
//   height: 3px;
//   width: 38%;
//   margin: auto;
//   box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
// }