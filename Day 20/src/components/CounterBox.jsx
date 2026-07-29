import useCounter from '../hooks/useCounter.jsx';

function CounterBox({ title, initialValue }) {
  const { count, increment, decrement, reset } = useCounter(initialValue);

  return (
    <article className="mini-card">
      <h3>{title}</h3>
      <p className="count-value">{count}</p>
      <div className="button-row">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button className="secondary" onClick={reset}>Reset</button>
      </div>
    </article>
  );
}

export default CounterBox;
