import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const stackTodosSlice = createSlice({
  name: "stackTodos",
  initialState: {
    baseUrl: "https://jsonplaceholder.typicode.com/todos/",
    todos: [],
    filteredTodos: [],
    inputNewTodo: "",
    selectedTodo: { id: null, title: "" },
    flag: "all",
    supportedFlags: ["all", "active", "completed"],
  },
  reducers: {
    fillTodo: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      axios.post(state.baseUrl, {
        title: action.payload.trim(),
      });
      state.inputNewTodo = "";
    },
    updateTodo: (state, action) => {
      const { todoId, newTodoValue } = action.payload;
      const todo = state.todos.find((item) => item.id === todoId);

      todo.title = newTodoValue;
    },
    updateTodoStatus: (state, action) => {
      axios.patch(state.baseUrl + action.payload.id, {
        completed: !action.payload.isComplete,
      });
    },
    removeTodo: (state, action) => {
      axios.delete(state.baseUrl + action.payload);
    },
    removeAllCompletedTodos: (state) => {
      const newStack = [...state.todos];

      state.todos = newStack.filter((item) => !item.isComplete);
    },
    getFilteredTodos: (state) => {
      switch (state.flag) {
        case "active": {
          state.filteredTodos = [...state.todos].filter(
            (item) => !item.completed
          );
          break;
        }
        case "completed": {
          state.filteredTodos = [...state.todos].filter(
            (item) => item.completed
          );
          break;
        }
        default:
          state.filteredTodos = [...state.todos];
      }
    },
    setFilterFlag: (state, action) => {
      if (!state.supportedFlags.includes(action.payload)) {
        return;
      }

      state.flag = action.payload;
    },
    appendNewValueForCreate: (state, action) => {
      state.inputNewTodo = action.payload;
    },
    appendNewValueForUpdate: (state, action) => {
      state.selectedTodo.title = action.payload;
    },
    setSelectedTodo: (state, action) => {
      state.selectedTodo = action.payload;
    },
    clearSelectedTodo: (state) => {
      state.selectedTodo = { id: null, title: "" };
    },
  },
});

export const {
  fillTodo,
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
