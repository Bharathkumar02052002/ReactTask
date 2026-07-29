import useLocalStorage from '../hooks/useLocalStorage.jsx';

function StudentStorageDemo() {
  const [studentName, setStudentName] = useLocalStorage('day20StudentName', 'Sudhan');

  return (
    <section className="task-card">
      <span>Task 4</span>
      <h2>useLocalStorage Student Name</h2>
      <label>
        Student Name
        <input value={studentName} onChange={(event) => setStudentName(event.target.value)} placeholder="Enter student name" />
      </label>
      <p className="state-box">Saved Student: <strong>{studentName || 'No name saved'}</strong></p>
      <p>Refresh the page and the student name stays saved.</p>
    </section>
  );
}

export default StudentStorageDemo;
