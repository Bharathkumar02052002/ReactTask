import { useState } from 'react';

function AgeIncrement() {
  const [age, setAge] = useState(18);

  return (
    <article className="task-card">
      <span className="task-number">Task 3</span>
      <h2>Age Increment</h2>
      <p>Age: <strong>{age}</strong></p>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
    </article>
  );
}

export default AgeIncrement;
