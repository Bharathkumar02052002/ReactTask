import CounterBox from './CounterBox.jsx';

function CounterDemo() {
  return (
    <section className="task-card wide-card">
      <span>Task 1</span>
      <h2>useCounter Custom Hook</h2>
      <p>Both counters use the same hook but work independently.</p>
      <div className="two-column">
        <CounterBox title="Counter One" initialValue={0} />
        <CounterBox title="Counter Two" initialValue={10} />
      </div>
    </section>
  );
}

export default CounterDemo;
