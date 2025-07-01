import { useState, useEffect } from 'react'
import Modal from './components/modal/Modal.jsx'
import Todo from './components/todo/Todo.jsx'
import DownPanel from './components/down_panel/DownPanel.jsx'
import './App.css'


function App() {
  if (!localStorage.getItem("stack")) {
    localStorage.setItem("stack", JSON.stringify([]));
  }

  const storage = JSON.parse(localStorage.getItem("stack"));
  const [stackTodos, setStackTodos] = useState(storage);
  const [currentTextTodo, setCurrentTextTodo] = useState({id: null, value: ""});
  const [filterTodos, setFilterTodos] = useState('all');

  useEffect(() => {
    localStorage.setItem("stack", JSON.stringify(stackTodos));
  }, [stackTodos, setStackTodos])
  
  return (
    <>
      <header>
        <h1>todos</h1>
      </header>
      <main>
        <Modal currentTextTodo={currentTextTodo} setCurrentTextTodo={setCurrentTextTodo} stackTodos={stackTodos} changeStack={setStackTodos} />
        <Todo stackTodos={stackTodos} changeStack={setStackTodos} filter={filterTodos} setCurrentTextTodo={setCurrentTextTodo}/>
        <DownPanel stackTodos={stackTodos} changeStack={setStackTodos} setFilter={setFilterTodos} />
      </main>
    </>
  );
}

export default App
