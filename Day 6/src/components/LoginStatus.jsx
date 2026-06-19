import { useState } from 'react';

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <article className="task-card">
      <span className="task-number">Task 4</span>
      <h2>Login Status</h2>
      <p className={isLoggedIn ? 'status success' : 'status'}>
        {isLoggedIn ? 'Logged In' : 'Logged Out'}
      </p>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Login</button>
    </article>
  );
}

export default LoginStatus;
