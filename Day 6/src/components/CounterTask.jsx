import { useState } from 'react';

function CounterTask() {
  const [count, setCount] = useState(0);

  return (
    <article className="task-card">
      <span className="task-number">Task 1</span>
      <h2>Counter Application</h2>
      <p className="big-value">{count}</p>
      <div className="button-row">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button className="secondary" onClick={() => setCount(0)}>Reset</button>
      </div>
    </article>
  );
}

export default CounterTask;
