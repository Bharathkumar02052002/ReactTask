import { useState } from 'react';

function StudentNameUpdate() {
  const [studentName, setStudentName] = useState('Sudhan');

  return (
    <article className="task-card">
      <span className="task-number">Task 2</span>
      <h2>Student Name Update</h2>
      <p>Student Name: <strong>{studentName}</strong></p>
      <button onClick={() => setStudentName('Ravi')}>Change Name</button>
    </article>
  );
}

export default StudentNameUpdate;
