import { configureStore } from '@reduxjs/toolkit'
import stackTodosReducer from './stackTodosSlice/stackTodosSlice'
import filterTodosReducer from './filterTodosSlice/filterTodosSlice'
import inputNewTodoReducer from './inputNewTodoSlice/inputNewTodoSlice'
import newValueTodoReducer from './newValueTodoSlice/newValueTodoSlice'

export default configureStore({
  reducer: {
    stackTodos: stackTodosReducer,
    filterTodos: filterTodosReducer,
    inputNewTodo: inputNewTodoReducer,
    newValueTodo: newValueTodoReducer
  }
})
