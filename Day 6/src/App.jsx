import CounterTask from './components/CounterTask.jsx';
import StudentNameUpdate from './components/StudentNameUpdate.jsx';
import AgeIncrement from './components/AgeIncrement.jsx';
import LoginStatus from './components/LoginStatus.jsx';
import ThemeSwitch from './components/ThemeSwitch.jsx';
import ShowHideContent from './components/ShowHideContent.jsx';
import UserDataLoading from './components/UserDataLoading.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import MobileNumber from './components/MobileNumber.jsx';
import SalaryUpdate from './components/SalaryUpdate.jsx';

function App() {
  return (
    <main className="app">
      <header className="page-header">
        <p>React Practice</p>
        <h1>Day 6 useState Tasks</h1>
      </header>

      <section className="task-grid">
        <CounterTask />
        <StudentNameUpdate />
        <AgeIncrement />
        <LoginStatus />
        <ThemeSwitch />
        <ShowHideContent />
        <UserDataLoading />
        <ProductDetails />
        <MobileNumber />
        <SalaryUpdate />
      </section>
    </main>
  );
}

export default App;
