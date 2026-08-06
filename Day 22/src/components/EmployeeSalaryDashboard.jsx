import { useMemo, useRef, useState } from 'react';

const employees = [
  { id: 1, name: 'Ravi', salary: 30000 },
  { id: 2, name: 'Sudhan', salary: 55000 },
  { id: 3, name: 'Priya', salary: 42000 },
  { id: 4, name: 'Ramesh', salary: 38000 },
];

function EmployeeSalaryDashboard() {
  const [darkTheme, setDarkTheme] = useState(false);
  const calculationCount = useRef(0);

  const totalSalary = useMemo(() => {
    calculationCount.current += 1;
    console.log('Employee salary calculation running');

    return employees.reduce((total, employee) => total + employee.salary, 0);
  }, []);

  return (
    <section className={darkTheme ? 'task-card dark-card' : 'task-card'}>
      <span>Task 4</span>
      <h2>Employee Salary Dashboard</h2>
      <button onClick={() => setDarkTheme(!darkTheme)}>Theme Change</button>
      <p>Salary calculation count: <strong>{calculationCount.current}</strong></p>
      <div className="list-box">
        {employees.map((employee) => (
          <p key={employee.id}>{employee.name}: Rs. {employee.salary}</p>
        ))}
      </div>
      <p className="total-box">Total Salary Expense: Rs. {totalSalary}</p>
    </section>
  );
}

export default EmployeeSalaryDashboard;
