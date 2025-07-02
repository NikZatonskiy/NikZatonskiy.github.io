import { createSlice } from '@reduxjs/toolkit'


export const inputNewTodoSlice = createSlice({
  name: 'inputNewTodo',
  initialState: {
    value: ''
  },
  reducers: {
    appendNewValue: (state, action) => {state.value = action.payload},
  }
})

export const { appendNewValue } = inputNewTodoSlice.actions;

export default inputNewTodoSlice.reducer;
