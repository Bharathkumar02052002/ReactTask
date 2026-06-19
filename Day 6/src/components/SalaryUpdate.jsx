import { useState } from 'react';

function SalaryUpdate() {
  const [salary, setSalary] = useState(25000);

  return (
    <article className="task-card">
      <span className="task-number">Task 10</span>
      <h2>Salary Update</h2>
      <p>Salary: <strong>Rs. {salary}</strong></p>
      <button onClick={() => setSalary(salary + 5000)}>Increase Salary</button>
    </article>
  );
}

export default SalaryUpdate;
