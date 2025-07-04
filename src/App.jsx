import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Modal from './components/modal/Modal.jsx'
import Todo from './components/todo/Todo.jsx'
import DownPanel from './components/DownPanel/DownPanel.jsx'
import { getFilteredTodos } from './redux/stackTodosSlice/stackTodosSlice.jsx'
import './App.css'


function App() {
  useEffect(() => {
    if (!localStorage.getItem("stack")) {
      localStorage.setItem("stack", JSON.stringify([]));
    }
  }, [])
  
  const stackTodos = useSelector(state => state.stackTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("stack", JSON.stringify(stackTodos.todos));
  }, [stackTodos.todos]);

  useEffect(() => { dispatch(getFilteredTodos()) }, [stackTodos.todos, stackTodos.flag]);

  return (
    <>
      <header>
        <h1>todos</h1>
      </header>
      <main>
        <Modal />
        <Todo />
        <DownPanel />
      </main>
      <div className='background-page-1' />
      <div className='background-page-2' />
    </>
  );
}

export default App
