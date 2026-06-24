import { useState } from 'react';
import UserCard from './components/UserCard.jsx';
import MessageComponent from './components/MessageComponent.jsx';
import CounterDisplay from './components/CounterDisplay.jsx';
import Dashboard from './components/Dashboard.jsx';
import DisplayComponent from './components/DisplayComponent.jsx';
import withBackgroundColor from './hoc/withBackgroundColor.jsx';
import withUpperCase from './hoc/withUpperCase.jsx';
import withCounter from './hoc/withCounter.jsx';
import withAuth from './hoc/withAuth.jsx';
import withIteration from './hoc/withIteration.jsx';

const UserCardWithBackground = withBackgroundColor(UserCard);
const UpperCaseMessage = withUpperCase(MessageComponent);
const CounterWithControls = withCounter(CounterDisplay);
const ProtectedDashboard = withAuth(Dashboard);
const IterationDisplay = withIteration(DisplayComponent);

function TaskOne() {
  const [color, setColor] = useState('blue');

  return (
    <TaskCard number="1" title="withBackgroundColor HOC">
      <input value={color} onChange={(event) => setColor(event.target.value)} placeholder="Enter background color" />
      <UserCardWithBackground color={color} name="Sudhan" role="React Developer" />
    </TaskCard>
  );
}

function TaskTwo() {
  const [text, setText] = useState('hello react');

  return (
    <TaskCard number="2" title="withUpperCase HOC">
      <input value={text} onChange={(event) => setText(event.target.value)} placeholder="Enter message" />
      <UpperCaseMessage text={text} />
    </TaskCard>
  );
}

function TaskThree() {
  return (
    <TaskCard number="3" title="withCounter HOC">
      <CounterWithControls />
    </TaskCard>
  );
}

function TaskFour() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <TaskCard number="4" title="withAuthentication HOC">
      <label className="check-row">
        <input type="checkbox" checked={isLogin} onChange={(event) => setIsLogin(event.target.checked)} />
        <span>isLogin = {String(isLogin)}</span>
      </label>
      <ProtectedDashboard isLogin={isLogin} />
    </TaskCard>
  );
}

function TaskFive() {
  const [count, setCount] = useState(5);
  const [color, setColor] = useState('green');

  return (
    <TaskCard number="5" title="withIteration HOC" wide>
      <div className="two-column-form">
        <label>
          Number
          <input type="number" min="0" value={count} onChange={(event) => setCount(event.target.value)} />
        </label>
        <label>
          Color
          <input value={color} onChange={(event) => setColor(event.target.value)} placeholder="Enter color" />
        </label>
      </div>
      <IterationDisplay count={count} color={color} />
    </TaskCard>
  );
}

function TaskCard({ number, title, children, wide = false }) {
  return (
    <article className={wide ? 'task-card wide-card' : 'task-card'}>
      <span className="task-number">Task {number}</span>
      <h2>{title}</h2>
      {children}
    </article>
  );
}

function App() {
  return (
    <main className="app">
      <header className="page-header">
        <p>React Practice</p>
        <h1>Day 8 Higher Order Components</h1>
      </header>

      <section className="task-grid">
        <TaskOne />
        <TaskTwo />
        <TaskThree />
        <TaskFour />
        <TaskFive />
      </section>
    </main>
  );
}

export default App;
