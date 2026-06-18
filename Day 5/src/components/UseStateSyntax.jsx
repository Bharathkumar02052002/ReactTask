function UseStateSyntax() {
  return (
    <article className="task-card syntax-card">
      <h2>useState Syntax</h2>
      <pre>
        <code>{`import { useState } from 'react';

const [value, setValue] = useState(initialValue);`}</code>
      </pre>
    </article>
  );
}

export default UseStateSyntax;
