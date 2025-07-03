import { configureStore } from '@reduxjs/toolkit'
import stackTodosReducer from './stackTodosSlice/stackTodosSlice'


export default configureStore({
  reducer: {
    stackTodos: stackTodosReducer,
  }
})
