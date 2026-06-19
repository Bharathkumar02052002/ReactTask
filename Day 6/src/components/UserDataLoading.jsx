import { useState } from 'react';

function UserDataLoading() {
  const [user, setUser] = useState(null);

  return (
    <article className="task-card">
      <span className="task-number">Task 7</span>
      <h2>User Data Loading</h2>
      <button onClick={() => setUser({ name: 'Sudhan', city: 'Chennai' })}>Load User</button>
      {user && (
        <div className="details-box">
          <p>Name: <strong>{user.name}</strong></p>
          <p>City: <strong>{user.city}</strong></p>
        </div>
      )}
    </article>
  );
}

export default UserDataLoading;
