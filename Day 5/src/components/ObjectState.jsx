import { useState } from 'react';

function ObjectState() {
  const [student, setStudent] = useState({
    name: 'Bharath',
    course: 'MERN Stack',
    day: 'Day 5',
  });

  return (
    <article className="task-card">
      <h2>Object Inside useState</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Topic:</strong> {student.day}</p>
      <button onClick={() => setStudent({ ...student, day: 'React Hooks Practice' })}>
        Update Topic
      </button>
    </article>
  );
}

export default ObjectState;
