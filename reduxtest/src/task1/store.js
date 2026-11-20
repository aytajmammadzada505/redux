/*task 1
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
}); */

/*task 2
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../task 2/User';

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
}); */

/*task 3
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../task 3/theme';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
}); */

/*task 4
import { configureStore } from '@reduxjs/toolkit';
import scoreReducer from '../task 4/Score';

export const store = configureStore({
    reducer: {
        score: scoreReducer,
    },
});*/

//task 5
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../task 5/todoSlice';

export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
});
