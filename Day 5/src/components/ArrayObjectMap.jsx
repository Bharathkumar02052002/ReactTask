import { useState } from 'react';

function ArrayObjectMap() {
  const [students] = useState([
    { id: 1, name: 'Bharath', course: 'React', city: 'Hyderabad' },
    { id: 2, name: 'Gowtham', course: 'Node.js', city: 'Chennai' },
    { id: 3, name: 'Kiran', course: 'MongoDB', city: 'Bangalore' },
  ]);

  return (
    <article className="task-card wide-card">
      <h2>Array of Objects Rendering Using map()</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}

export default ArrayObjectMap;
