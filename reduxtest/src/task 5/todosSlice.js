import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {
    add: (state, action) => {
      state.items.push({
        text: action.payload,
        completed: false,
      });
    },
    toggle: (state, action) => {
      const todo = state.items.find((item) => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, toggle, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
