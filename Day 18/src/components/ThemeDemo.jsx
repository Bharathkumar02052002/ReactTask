import { useAppContext } from '../context/AppContext.jsx';

function ThemeHeader() {
  const { theme, setTheme } = useAppContext();

  return (
    <header className="theme-header">
      <strong>Header</strong>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Change Theme
      </button>
    </header>
  );
}

function ThemeSidebar() {
  const { theme } = useAppContext();

  return <aside className="theme-sidebar">Sidebar Theme : {theme}</aside>;
}

function ThemeCard() {
  const { theme } = useAppContext();

  return <article className="theme-inner-card">Card using {theme} theme</article>;
}

function ThemeDemo() {
  const { theme } = useAppContext();

  return (
    <section className="task-card wide-card">
      <span>Task 3</span>
      <h2>Theme Rendering</h2>
      <div className={theme === 'dark' ? 'theme-demo dark-theme' : 'theme-demo light-theme'}>
        <ThemeHeader />
        <div className="theme-layout">
          <ThemeSidebar />
          <ThemeCard />
        </div>
      </div>
    </section>
  );
}

export default ThemeDemo;
