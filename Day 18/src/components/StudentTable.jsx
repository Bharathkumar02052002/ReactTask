import { useAppContext } from '../context/AppContext.jsx';

function StudentTable() {
  const { students } = useAppContext();

  return (
    <section className="task-card wide-card">
      <span>Task 4</span>
      <h2>Student Table Rendering</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default StudentTable;
