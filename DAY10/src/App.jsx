import { useState } from 'react';

const tasks = [
  {
    number: 1,
    title: 'Student Registration Form',
    action: 'Submit',
    initialValues: {
      name: '',
      age: '',
      course: '',
      city: '',
    },
    fields: [
      { name: 'name', label: 'Name', placeholder: 'Enter student name' },
      { name: 'age', label: 'Age', placeholder: 'Enter age', type: 'number' },
      { name: 'course', label: 'Course', placeholder: 'Enter course' },
      { name: 'city', label: 'City', placeholder: 'Enter city' },
    ],
  },
  {
    number: 2,
    title: 'Employee Details Form',
    action: 'Submit',
    initialValues: {
      employeeName: '',
      employeeId: '',
      department: '',
      salary: '',
    },
    fields: [
      { name: 'employeeName', label: 'Employee Name', placeholder: 'Enter employee name' },
      { name: 'employeeId', label: 'Employee ID', placeholder: 'Enter employee ID' },
      { name: 'department', label: 'Department', placeholder: 'Enter department' },
      { name: 'salary', label: 'Salary', placeholder: 'Enter salary', type: 'number' },
    ],
  },
  {
    number: 3,
    title: 'Product Management Form',
    action: 'Submit',
    initialValues: {
      productName: '',
      price: '',
      category: '',
      brand: '',
    },
    fields: [
      { name: 'productName', label: 'Product Name', placeholder: 'Enter product name' },
      { name: 'price', label: 'Price', placeholder: 'Enter price', type: 'number' },
      { name: 'category', label: 'Category', placeholder: 'Enter category' },
      { name: 'brand', label: 'Brand', placeholder: 'Enter brand' },
    ],
  },
  {
    number: 4,
    title: 'User Profile Form',
    action: 'Submit',
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      address: '',
    },
    fields: [
      { name: 'name', label: 'Name', placeholder: 'Enter name' },
      { name: 'email', label: 'Email', placeholder: 'Enter email', type: 'email' },
      { name: 'mobile', label: 'Mobile', placeholder: 'Enter mobile' },
      { name: 'address', label: 'Address', placeholder: 'Enter address' },
    ],
  },
  {
    number: 5,
    title: 'School Management Form',
    action: 'Save',
    initialValues: {
      schoolName: '',
      principalName: '',
      city: '',
      totalStudents: '',
    },
    fields: [
      { name: 'schoolName', label: 'School Name', placeholder: 'Enter school name' },
      { name: 'principalName', label: 'Principal Name', placeholder: 'Enter principal name' },
      { name: 'city', label: 'City', placeholder: 'Enter city' },
      { name: 'totalStudents', label: 'Total Students', placeholder: 'Enter total students', type: 'number' },
    ],
  },
];

function ObjectStateForm({ task }) {
  const [formData, setFormData] = useState(task.initialValues);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(formData);
  };

  const handleReset = () => {
    setFormData(task.initialValues);
    setSubmittedData(null);
  };

  return (
    <article className="task-card">
      <span className="task-number">Task {task.number}</span>
      <h2>{task.title}</h2>

      <form onSubmit={handleSubmit}>
        {task.fields.map((field) => (
          <label key={field.name}>
            {field.label}
            <input
              type={field.type || 'text'}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required
            />
          </label>
        ))}

        <div className="button-row">
          <button type="submit">{task.action}</button>
          <button type="button" className="secondary" onClick={handleReset}>Reset</button>
        </div>
      </form>

      {submittedData && (
        <section className="details-card">
          <h3>{task.title.replace('Form', 'Details')}</h3>
          {task.fields.map((field) => (
            <p key={field.name}>
              <span>{field.label}</span>
              <strong>{submittedData[field.name]}</strong>
            </p>
          ))}
        </section>
      )}
    </article>
  );
}

function App() {
  return (
    <main className="app">
      <header className="page-header">
        <p>React Practice</p>
        <h1>DAY 10 Object State Forms</h1>
      </header>

      <section className="task-grid">
        {tasks.map((task) => (
          <ObjectStateForm key={task.number} task={task} />
        ))}
      </section>
    </main>
  );
}

export default App;
