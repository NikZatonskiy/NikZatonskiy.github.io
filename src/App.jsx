import { useState, useEffect, useMemo } from 'react'
import Modal from './components/modal/Modal.jsx'
import Todo from './components/todo/Todo.jsx'
import DownPanel from './components/down_panel/DownPanel.jsx'
import './App.css'


function App() {
  const storage = JSON.parse(localStorage.getItem("stack"));
  const [stackTodos, setStackTodos] = useState(storage);
  const [currentTextTodo, setCurrentTextTodo] = useState({id: null, value: ""});
  const [filterTodos, setFilterTodos] = useState('all');
  const [freeIndex, setFreeIndex] = useState(0);
  const [newTodo, setNewTodo] = useState('');
  const [valueForUpdateTodo, setValueForUpdateTodo] = useState('');

  const filteredTodos = useMemo(() => {
    switch (filterTodos) {
      case "active": return stackTodos.filter(item => !item.isComplete);
      case "completed": return stackTodos.filter(item => item.isComplete);
      default: return stackTodos;
    }
  }, [stackTodos, filterTodos]);

  const handleAddTodo = (event) => {
    event.preventDefault();

    if (!newTodo.trim()) {
      return;
    };

    const newTodoElement = {id: freeIndex, value: newTodo, isComplete: false};
    
    setFreeIndex(freeIndex + 1);
    setStackTodos([...stackTodos, newTodoElement]);
    setNewTodo("");
  };

  const handleKeydown = (event) => {
    if (event.key === "Enter" && valueForUpdateTodo.trim()) {
      const newStack = structuredClone(stackTodos);
      const itemIndex = newStack.findIndex(item => item.id == currentTextTodo.id);

      newStack[itemIndex] = ({id: currentTextTodo.id, value: valueForUpdateTodo, isComplete: false});
      setStackTodos(newStack);
      closeModal(event, true);
    }
  };

  const closeModal = (event, isKeydown = false) => {
    event.stopPropagation();
       
    const isMouseClick = event.target?.type == "textarea" || event.target?.className == "modal-window"

    if (isMouseClick && !isKeydown) {
        return;
    };

    setCurrentTextTodo({id: null, value: ""});
  };

  useEffect(() => {
    localStorage.setItem("stack", JSON.stringify(stackTodos));
  }, [stackTodos, setStackTodos])

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
        <Modal currentTextTodo={currentTextTodo} setValueForUpdateTodo={setValueForUpdateTodo} closeModal={closeModal} handleKeydown={handleKeydown} />
        <Todo stackTodos={stackTodos} changeStack={setStackTodos} filteredTodos={filteredTodos} setCurrentTextTodo={setCurrentTextTodo} handleAddTodo={handleAddTodo} newTodo={newTodo} setNewTodo={setNewTodo} />
        <DownPanel stackTodos={stackTodos} changeStack={setStackTodos} setFilter={setFilterTodos} />
      </main>
    </>
  );
}

export default App
