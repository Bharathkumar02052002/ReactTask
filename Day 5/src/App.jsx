import ClassValue from './components/ClassValue.jsx';
import UseStateSyntax from './components/UseStateSyntax.jsx';
import Counter from './components/Counter.jsx';
import ObjectState from './components/ObjectState.jsx';
import ArrayState from './components/ArrayState.jsx';
import ArrayObjectMap from './components/ArrayObjectMap.jsx';

function App() {
  return (
    <main className="app">
      <header className="page-header">
        <p>React Practice</p>
        <h1>Day 5 Tasks</h1>
      </header>

      <section className="grid">
        <ClassValue />
        <UseStateSyntax />
        <Counter />
        <ObjectState />
        <ArrayState />
        <ArrayObjectMap />
      </section>
    </main>
  );
}

export default App;
