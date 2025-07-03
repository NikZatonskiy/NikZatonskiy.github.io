import { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Modal from './components/modal/Modal.jsx'
import Todo from './components/todo/Todo.jsx'
import DownPanel from './components/down_panel/DownPanel.jsx'
import { addTodo, appendNewValueForCreate } from './redux/stackTodosSlice/stackTodosSlice.jsx'
import './App.css'


function App() {
  const stackTodos = useSelector(state => state.stackTodos);
  const dispatch = useDispatch();

  const filteredTodos = useMemo(() => {
    switch (stackTodos.flag) {
      case "active": return stackTodos.todos.filter(item => !item.isComplete);
      case "completed": return stackTodos.todos.filter(item => item.isComplete);
      default: return stackTodos.todos;
    }
  }, [stackTodos.todos, stackTodos.flag]);

  const handleAddTodo = (event) => {
    event.preventDefault();

    if (!stackTodos.inputNewTodo.trim()) {
      return;
    };
    
    dispatch(addTodo(stackTodos.inputNewTodo));
    dispatch(appendNewValueForCreate(''));
  };

  useEffect(() => {
    localStorage.setItem("stack", JSON.stringify(stackTodos.todos));
  }, [stackTodos.todos])

  useEffect(() => {
    if (!localStorage.getItem("stack")) {
      localStorage.setItem("stack", JSON.stringify([]));
    }
  }, [])
  
  return (
    <>
      <header>
        <h1>todos</h1>
      </header>
      <main>
        <Modal />
        <Todo filteredTodos={filteredTodos} handleAddTodo={handleAddTodo} />
        <DownPanel />
      </main>
      <div className='background-page-1' />
      <div className='background-page-2' />
    </>
  );
}

export default App
