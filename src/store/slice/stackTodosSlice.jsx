import { createSlice } from '@reduxjs/toolkit'

export const stackTodosSlice = createSlice({
  name: 'stackTodos',
  initialState: {
    todos: localStorage.getItem("stack") ? JSON.parse(localStorage.getItem("stack")) : [],
    filteredTodos: [],
    inputNewTodo: '',
    selectedTodo: {id: null, value: ''},
    flag: 'all',
    supportedFlags: ['all', 'active', 'completed']
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({id: Date.now(), value: action.payload, isComplete: false});
      state.inputNewTodo = '';
    },
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
    removeAllCompletedTodos: state => {
      const newStack = [...state.todos];

      state.todos = newStack.filter(item => !item.isComplete);
    },
    getFilteredTodos: state => {
      switch (state.flag) {
        case "active": {
          state.filteredTodos = [...state.todos].filter(item => !item.isComplete);
          break;
        };
        case "completed": {
          state.filteredTodos = [...state.todos].filter(item => item.isComplete);
          break;
        };
        default: state.filteredTodos = [...state.todos];
      }
    },
    setFilterFlag: (state, action) => {
      if (!state.supportedFlags.includes(action.payload)) {
        return;
      };
      
      state.flag = action.payload;
    },
    appendNewValueForCreate: (state, action) => { state.inputNewTodo = action.payload },
    appendNewValueForUpdate: (state, action) => { state.selectedTodo.value = action.payload },
    setSelectedTodo: (state, action) => { state.selectedTodo = action.payload },
    clearSelectedTodo: state => { state.selectedTodo = {id: null, value: '' } }
  }
})

export const {
  addTodo,
  updateTodo,
  updateTodoStatus,
  removeTodo,
  removeAllCompletedTodos,
  getFilteredTodos,
  getCountActiveTodos,
  setFilterFlag,
  appendNewValueForCreate,
  appendNewValueForUpdate,
  setSelectedTodo,
  clearSelectedTodo,
} = stackTodosSlice.actions;

export default stackTodosSlice.reducer;
