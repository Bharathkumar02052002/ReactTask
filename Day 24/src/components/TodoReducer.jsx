import { useReducer, useState } from 'react';

const initialTodoState = {
  todos: [
    { id: 1, text: 'Learn useReducer', completed: false },
    { id: 2, text: 'Practice dispatch actions', completed: true },
  ],
};

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, action.payload],
      };
    case 'DELETE_TODO':
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case 'MARK_COMPLETE':
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case 'RESET_ALL_TODOS':
      return {
        todos: [],
      };
    default:
      return state;
  }
}

function TodoReducer() {
  const [state, dispatch] = useReducer(todoReducer, initialTodoState);
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();

    if (todoText.trim() === '') return;

    dispatch({
      type: 'ADD_TODO',
      payload: { id: Date.now(), text: todoText, completed: false },
    });
    setTodoText('');
  };

  return (
    <section className="task-card wide-card">
      <span>Task 3</span>
      <h2>Todo Application</h2>
      <form className="inline-form" onSubmit={handleAddTodo}>
        <input
          value={todoText}
          onChange={(event) => setTodoText(event.target.value)}
          placeholder="Enter todo"
        />
        <button type="submit">Add Todo</button>
        <button type="button" className="danger" onClick={() => dispatch({ type: 'RESET_ALL_TODOS' })}>
          Reset All Todos
        </button>
      </form>

      <div className="todo-list">
        {state.todos.length === 0 ? (
          <p className="empty-text">No todos available</p>
        ) : (
          state.todos.map((todo) => (
            <article className={todo.completed ? 'todo-item completed' : 'todo-item'} key={todo.id}>
              <div>
                <strong>{todo.text}</strong>
                <p>{todo.completed ? 'Completed' : 'Pending'}</p>
              </div>
              <div className="button-row">
                <button onClick={() => dispatch({ type: 'MARK_COMPLETE', payload: todo.id })}>
                  Mark Complete
                </button>
                <button className="danger" onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>
                  Delete Todo
                </button>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}

export default TodoReducer;
