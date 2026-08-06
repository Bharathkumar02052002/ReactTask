import { useMemo, useRef, useState } from 'react';

const students = [
  { id: 1, name: 'Sudhan', placed: true },
  { id: 2, name: 'Ravi', placed: false },
  { id: 3, name: 'Priya', placed: true },
  { id: 4, name: 'Ramesh', placed: false },
  { id: 5, name: 'Kiran', placed: true },
];

function StudentDashboard() {
  const [darkTheme, setDarkTheme] = useState(false);
  const calculationCount = useRef(0);

  const stats = useMemo(() => {
    calculationCount.current += 1;
    console.log('Student statistics calculation running');

    const totalStudents = students.length;
    const placedStudents = students.filter((student) => student.placed).length;
    const unplacedStudents = totalStudents - placedStudents;

    return { totalStudents, placedStudents, unplacedStudents };
  }, []);

  return (
    <section className={darkTheme ? 'task-card dark-card' : 'task-card'}>
      <span>Task 3</span>
      <h2>Student Dashboard</h2>
      <button onClick={() => setDarkTheme(!darkTheme)}>Theme Change</button>
      <p>Statistics calculation count: <strong>{calculationCount.current}</strong></p>
      <div className="stats-grid">
        <article>Total Students: <strong>{stats.totalStudents}</strong></article>
        <article>Placed Students: <strong>{stats.placedStudents}</strong></article>
        <article>Unplaced Students: <strong>{stats.unplacedStudents}</strong></article>
      </div>
    </section>
  );
}

export default StudentDashboard;
