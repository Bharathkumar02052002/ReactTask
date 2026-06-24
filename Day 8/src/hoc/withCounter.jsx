import { useState } from 'react';

function withCounter(WrappedComponent) {
  return function CounterComponent(props) {
    const [count, setCount] = useState(0);

    return (
      <div>
        <WrappedComponent count={count} {...props} />
        <div className="button-row">
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
        </div>
      </div>
    );
  };
}

export default withCounter;
