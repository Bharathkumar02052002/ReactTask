import CounterReducer from './components/CounterReducer.jsx';
import StudentManagement from './components/StudentManagement.jsx';
import TodoReducer from './components/TodoReducer.jsx';

function App() {
  return (
    <main className="app">
      <header className="page-header">
        <p>React Practice</p>
        <h1>Day 24 useReducer Hooks</h1>
      </header>

      <section className="info-card">
        <h2>useReducer Assignment</h2>
        <p>
          This project uses reducer functions, dispatch(), action type, and payload to manage counter, student CRUD, and todo CRUD state.
        </p>
      </section>

      <section className="task-grid">
        <CounterReducer />
        <StudentManagement />
        <TodoReducer />
      </section>
    </main>
  );
}

export default App;
