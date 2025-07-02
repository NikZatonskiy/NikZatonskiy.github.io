import { createSlice } from '@reduxjs/toolkit'


export const newValueTodoSlice = createSlice({
  name: 'newValueTodo',
  initialState: {
    id: null,
    value: ''
  },
  reducers: {
    appendNewValue: (state, action) => {state.value = action.payload},
    setCurrentTodo: (state, action) => {
      const { todoId, todoValue } = action.payload;

      state.id = todoId;
      state.value = todoValue;
    },
    clearState: state => {
      state.id = null;
      state.value = '';
    }
  }
})

export const { appendNewValue, setCurrentTodo, clearState } = newValueTodoSlice.actions;

export default newValueTodoSlice.reducer;
