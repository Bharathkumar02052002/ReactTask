import EmployeeSalaryDashboard from './components/EmployeeSalaryDashboard.jsx';
import ProductSearch from './components/ProductSearch.jsx';
import ShoppingCartTotal from './components/ShoppingCartTotal.jsx';
import StudentDashboard from './components/StudentDashboard.jsx';

function App() {
  return (
    <main className="app">
      <header className="page-header">
        <p>React Practice</p>
        <h1>Day 22 useMemo and useCallback</h1>
      </header>

      <section className="info-card">
        <h2>useMemo Assignment</h2>
        <p>
          Each task has a Theme Change button. The expensive filter, total, statistics, and salary calculations are wrapped with useMemo, so they do not run again when only the theme changes.
        </p>
      </section>

      <section className="task-grid">
        <ProductSearch />
        <ShoppingCartTotal />
        <StudentDashboard />
        <EmployeeSalaryDashboard />
      </section>
    </main>
  );
}

export default App;
