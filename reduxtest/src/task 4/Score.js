import { createSlice } from '@reduxjs/toolkit';

const Score = createSlice({
    name: 'score',
    initialState: { value: 0 },
    reducers: {
        add: (state) => {
            state.value = Math.min(100, state.value + 10);
        },
        decrease: (state) => {
            state.value = Math.max(0, state.value - 10);
        },
        reset: (state) => {
            state.value = 0;
        },
    },
});

export const { add, decrease, reset } = Score.actions;
export default Score.reducer;