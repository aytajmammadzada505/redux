import { createSlice } from '@reduxjs/toolkit';

const User = createSlice({
    name: 'user',
    initialState: { name: 'Əli' },
    reducers: {
        updateName: (state, action) => {
            state.name = action.payload;
        },
    },
});

export const { updateName } = User.actions;
export default User.reducer;