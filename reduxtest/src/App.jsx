/*task 1
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './task1/counterSlice';

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>counter: {count}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>Artir (+1)</button>
        <button onClick={() => dispatch(decrement())}>Azalt (-1)</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
} */

/*task 2
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateName } from './task 2/User';

export default function App() {
  const userName = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleUpdate = () => {
    if (inputValue.trim() !== '') {
      dispatch(updateName(inputValue));
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>User name: {userName}</h1>
      <div>
        <input
          type="text"
          placeholder="type a new name..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleUpdate}>Change name</button>
      </div>
    </div>
  );
}*/

/*task 3
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './task 3/theme';

export default function App() {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const isDark = mode === 'dark';

  return (
    <div style={{
      color: isDark ? '#ffffff' : '#121212', backgroundColor: isDark ? '#121212' : '#ffffff', alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
    }}>
      <h1>current theme: {isDark ? 'Dark Mode' : 'Light Mode'}</h1>
      <button
        onClick={() => dispatch(toggleTheme())}
        style={{
          padding: '20px 30px',
          cursor: 'pointer'
        }}
      >
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div >
  );
} */

/*task 4
import { useSelector, useDispatch } from 'react-redux';
import { add, decrease, reset } from './task 4/Score';

export default function App() {
  const score = useSelector((state) => state.score.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Score: {score}</h1>
      <div>
        <button onClick={() => dispatch(add())} disabled={score >= 100}>
          +10
        </button>
        <button onClick={() => dispatch(decrease())} disabled={score <= 0}>
          -10
        </button>
        <button onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  );
} */

//task 5
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, toggle, deleteTodo } from './task 5/todoSlice';

export default function App() {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const completedCount = todos.filter((item) => item.completed).length;

  const handleAdd = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      dispatch(add(text.trim()));
      setText('');
    }
  };

  return (
    <div>
      <h1>Todo list</h1>
      <p>completed tasks {completedCount} {todos.length}</p>

      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="write new task.."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">add</button>
      </form>

      <ul>
        {todos.map((item) => (
          <li
            key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => dispatch(toggle(item.id))}
              />
              <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                {item.text}
              </span>
            </label>

            <button onClick={() => dispatch(deleteTodo(item.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
