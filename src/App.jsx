import { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Modal from './components/modal/Modal.jsx'
import Todo from './components/todo/Todo.jsx'
import DownPanel from './components/down_panel/DownPanel.jsx'
import { addTodo, updateTodo } from './redux/stackTodosSlice/stackTodosSlice.jsx'
import { appendNewValue } from './redux/inputNewTodoSlice/inputNewTodoSlice.jsx'
import { clearState } from './redux/newValueTodoSlice/newValueTodoSlice.jsx'
import './App.css'


function App() {
  const dispatch = useDispatch();
  const filterFlag = useSelector(state => state.filterTodos.flag);
  const stackTodos = useSelector(state => state.stackTodos.todos);
  const inputNewTodo = useSelector(state => state.inputNewTodo.value);
  const newValueTodo = useSelector(state => state.newValueTodo);

  const filteredTodos = useMemo(() => {
    switch (filterFlag) {
      case "active": return stackTodos.filter(item => !item.isComplete);
      case "completed": return stackTodos.filter(item => item.isComplete);
      default: return stackTodos;
    }
  }, [stackTodos, filterFlag]);

  const handleAddTodo = (event) => {
    event.preventDefault();

    if (!inputNewTodo.trim()) {
      return;
    };
    
    dispatch(addTodo(inputNewTodo));
    dispatch(appendNewValue(''));
  };

  const handleKeydown = (event) => {
    if (event.key === "Enter" && newValueTodo.value.trim()) {
      dispatch(updateTodo({todoId: newValueTodo.id, newTodoValue: newValueTodo.value}));
      closeModal(event, true);
    }
  };

  const closeModal = (event, isKeydown = false) => {
    event.stopPropagation();
    
    const isMouseClick = event.target?.type == "textarea" || event.target?.className == "modal-window"

    if (isMouseClick && !isKeydown) {
        return;
    };

    dispatch(clearState());
  };

  useEffect(() => {
    localStorage.setItem("stack", JSON.stringify(stackTodos));
  }, [stackTodos])

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
        <Modal closeModal={closeModal} handleKeydown={handleKeydown} />
        <Todo filteredTodos={filteredTodos} handleAddTodo={handleAddTodo} />
        <DownPanel stackTodos={stackTodos} />
      </main>
    </>
  );
}

export default App
