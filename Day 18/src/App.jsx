import Profile from './components/Profile.jsx';
import Products from './components/Products.jsx';
import ThemeDemo from './components/ThemeDemo.jsx';
import StudentTable from './components/StudentTable.jsx';
import Cart from './components/Cart.jsx';
import Dashboard from './components/Dashboard.jsx';

function App() {
  return (
    <main className="app">
      <header className="page-header">
        <p>React Practice</p>
        <h1>Day 18 Context API</h1>
      </header>

      <section className="info-card">
        <h2>Provider and Consumer</h2>
        <p>
          All data is stored in Context and consumed directly inside child components. This avoids passing user, product, theme, student, cart and dashboard data through props.
        </p>
      </section>

      <section className="task-grid">
        <Profile />
        <Products />
        <ThemeDemo />
        <StudentTable />
        <Cart />
        <Dashboard />
      </section>
    </main>
  );
}

export default App;
