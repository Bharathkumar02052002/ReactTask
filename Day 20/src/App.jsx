import CounterDemo from './components/CounterDemo.jsx';
import LoginToggleDemo from './components/LoginToggleDemo.jsx';
import ProductsFetchDemo from './components/ProductsFetchDemo.jsx';
import StudentSearchDemo from './components/StudentSearchDemo.jsx';
import StudentStorageDemo from './components/StudentStorageDemo.jsx';

function App() {
  return (
    <main className="app">
      <header className="page-header">
        <p>React Practice</p>
        <h1>Day 20 Custom Hooks</h1>
      </header>

      <section className="info-card">
        <h2>Refactor Logic and Share Functions</h2>
        <p>
          This assignment uses reusable custom hooks: useCounter, useToggle, useFetch, useLocalStorage, and useSearch.
        </p>
      </section>

      <section className="task-grid">
        <CounterDemo />
        <LoginToggleDemo />
        <StudentStorageDemo />
        <ProductsFetchDemo />
        <StudentSearchDemo />
      </section>
    </main>
  );
}

export default App;
