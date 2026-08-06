import { useReducer } from 'react';

const initialCounterState = {
  count: 0,
};

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return initialCounterState;
    default:
      return state;
  }
}

function CounterReducer() {
  const [state, dispatch] = useReducer(counterReducer, initialCounterState);

  return (
    <section className="task-card">
      <span>Task 1</span>
      <h2>Counter Application</h2>
      <p className="count-value">{state.count}</p>
      <div className="button-row">
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        <button className="secondary" onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      </div>
    </section>
  );
}

export default CounterReducer;
