import { Suspense, lazy, useState } from 'react';
import Loader from './components/Loader.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const Products = lazy(() => import('./pages/Products.jsx'));
const About = lazy(() => import('./pages/About.jsx'));

const pages = {
  home: Home,
  products: Products,
  about: About,
};

function App() {
  const [activePage, setActivePage] = useState('home');
  const ActivePage = pages[activePage];

  return (
    <main className="app">
      <header className="page-header">
        <div>
          <p>React Practice</p>
          <h1>Day 26 React Lazy Loading and ENV</h1>
        </div>
        <nav>
          <button className={activePage === 'home' ? 'active' : ''} onClick={() => setActivePage('home')}>Home</button>
          <button className={activePage === 'products' ? 'active' : ''} onClick={() => setActivePage('products')}>Products</button>
          <button className={activePage === 'about' ? 'active' : ''} onClick={() => setActivePage('about')}>About</button>
        </nav>
      </header>

      <section className="info-card">
        <h2>Assignment Output</h2>
        <p>
          API URL is stored in the .env file as VITE_API_URL and used inside the Products page. Three pages are lazy-loaded using React.lazy(), Suspense, and fallback.
        </p>
      </section>

      <Suspense fallback={<Loader />}>
        <ActivePage />
      </Suspense>
    </main>
  );
}

export default App;
