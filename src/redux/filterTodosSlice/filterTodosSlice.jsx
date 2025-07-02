import { createSlice } from '@reduxjs/toolkit'

export const filterTodosSlice = createSlice({
  name: 'filterTodos',
  initialState: {
    flag: 'all',
    supportedFlags: ['all', 'active', 'completed']
  },
  reducers: {
    changeFlag: (state, action) => {
      if (!state.supportedFlags.includes(action.payload)) {
        return;
      };
      
      state.flag = action.payload;
    }
  }
})

export const { changeFlag } = filterTodosSlice.actions;

export default filterTodosSlice.reducer;