import useSearch from '../hooks/useSearch.jsx';

const students = [
  { id: 1, name: 'Sudhan', course: 'MERN' },
  { id: 2, name: 'Ravi', course: 'React' },
  { id: 3, name: 'Sudhakar', course: 'JavaScript' },
  { id: 4, name: 'Priya', course: 'Node.js' },
  { id: 5, name: 'Ramesh', course: 'MongoDB' },
];

function StudentSearchDemo() {
  const { searchText, setSearchText, filteredItems } = useSearch(students, 'name');

  return (
    <section className="task-card wide-card">
      <span>Task 5</span>
      <h2>useSearch Student Filter</h2>
      <input value={searchText} onChange={(event) => setSearchText(event.target.value)} placeholder="Search students by name" />
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {filteredItems.length === 0 && <p className="error-box">No students found</p>}
    </section>
  );
}

export default StudentSearchDemo;
