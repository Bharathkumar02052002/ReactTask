import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <article className="task-card">
      <h2>Counter Program</h2>
      <p className="counter-value">{count}</p>
      <div className="button-row">
        <button onClick={() => setCount(count - 1)}>Minus</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Plus</button>
      </div>
    </article>
  );
}

export default Counter;
