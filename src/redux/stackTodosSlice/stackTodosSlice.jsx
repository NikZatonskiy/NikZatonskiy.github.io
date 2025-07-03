import { createSlice } from '@reduxjs/toolkit'


export const stackTodosSlice = createSlice({
  name: 'stackTodos',
  initialState: {
    todos: localStorage.getItem("stack") ? JSON.parse(localStorage.getItem("stack")) : [],
    inputNewTodo: '',
    currentTodo: {
      id: null,
      value: ''
    },
    flag: 'all',
    supportedFlags: ['all', 'active', 'completed']
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
    removeCompletedTodos: state => {
      const newStack = [...state.todos];

      state.todos = newStack.filter(item => !item.isComplete);
    },
    getFilteredTodos: state => {
      switch (state.flag) {
        case "active": return state.todos.filter(item => !item.isComplete);
        case "completed": return state.todos.filter(item => item.isComplete);
        default: return state.todos;
      }
    },
    getCountActiveTodos: state => {
      const count = state.todos.filter(item => item.isComplete == false);
    
      return count.length;
    },
    changeFlag: (state, action) => {
      if (!state.supportedFlags.includes(action.payload)) {
        return;
      };
      
      state.flag = action.payload;
    },
    appendNewValueForCreate: (state, action) => {state.inputNewTodo = action.payload},
    appendNewValueForUpdate: (state, action) => {state.currentTodo.value = action.payload},
    setCurrentTodo: (state, action) => { state.currentTodo = action.payload },
    clearCurrentTodo: state => {
      state.currentTodo.id = null;
      state.currentTodo.value = '';
    }
  }
})

export const {
  addTodo,
  updateTodo,
  updateTodoStatus,
  removeTodo,
  removeCompletedTodos,
  getFilteredTodos,
  getCountActiveTodos,
  changeFlag,
  appendNewValueForCreate,
  appendNewValueForUpdate,
  setCurrentTodo,
  clearCurrentTodo
} = stackTodosSlice.actions;

export default stackTodosSlice.reducer;
