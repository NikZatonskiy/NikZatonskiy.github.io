import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Todo from './components/todo/Todo.jsx'
import { getFilteredTodos } from './store/slice/stackTodosSlice.jsx'
import './App.css'
import DownPanel from './components/DownPanel/DownPanel.jsx'
import Modal from './components/modal/modal.jsx'

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
