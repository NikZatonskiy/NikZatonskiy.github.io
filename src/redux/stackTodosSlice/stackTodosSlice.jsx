import { createSlice } from '@reduxjs/toolkit'


export const stackTodosSlice = createSlice({
  name: 'stackTodos',
  initialState: {
    todos: localStorage.getItem("stack") ? JSON.parse(localStorage.getItem("stack")) : []
  },
  reducers: {
    addTodo: (state, action) => { state.todos.push({id: Date.now(), value: action.payload, isComplete: false}) },
    updateTodo: (state, action) => {
      const { todoId, newTodoValue } = action.payload;
      const todo = state.todos.find(item => item.id === todoId);

      todo.value = newTodoValue;
    },
    updateTodoStatus: (state, action) => {
      const elementTodo = state.todos.find(item => item.id === action.payload);
  
      elementTodo.isComplete = !elementTodo.isComplete;
    },
    removeTodo: (state, action) => {
      const elementTodo = state.todos.findIndex(item => item.id === action.payload);

      state.todos.splice(elementTodo, 1);
    },
  }
})

export const { addTodo, updateTodo, updateTodoStatus, removeTodo } = stackTodosSlice.actions;

export default stackTodosSlice.reducer;
