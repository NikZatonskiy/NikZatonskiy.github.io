import { configureStore } from '@reduxjs/toolkit'
import stackTodosReducer from './slice/stackTodosSlice'

export default configureStore({
  reducer: {
    stackTodos: stackTodosReducer,
  }
})
