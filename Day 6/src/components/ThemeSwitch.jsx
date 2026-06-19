import { useState } from 'react';

function ThemeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <article className={isDarkMode ? 'task-card dark-card' : 'task-card'}>
      <span className="task-number">Task 5</span>
      <h2>Theme Switch</h2>
      <p>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Theme</button>
    </article>
  );
}

export default ThemeSwitch;
