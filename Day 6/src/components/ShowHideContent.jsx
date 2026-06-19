import { useState } from 'react';

function ShowHideContent() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <article className="task-card">
      <span className="task-number">Task 6</span>
      <h2>Show / Hide Content</h2>
      {isVisible && <p>React updates the screen whenever this state value changes.</p>}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide Content' : 'Show Content'}
      </button>
    </article>
  );
}

export default ShowHideContent;
