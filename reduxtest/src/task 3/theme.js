import { createSlice } from '@reduxjs/toolkit';

const theme = createSlice({
    name: 'theme',
    initialState: { mode: 'light' },
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
    },
});

export const { toggleTheme } = theme.actions;
export default theme.reducer;