import SearchTask from './components/SearchTask.jsx';

const studentNames = ['Sudhan', 'Sudhakar', 'Ravi', 'Kiran', 'Priya', 'Sudeep'];
const productNames = ['Laptop', 'Laptop Stand', 'Mouse', 'Keyboard', 'Mobile', 'Tablet'];
const employeeNames = ['Ravi', 'Ramesh', 'Arun', 'Rajesh', 'Kavitha', 'Ramya'];
const courseNames = ['React', 'React Native', 'Node.js', 'MongoDB', 'JavaScript', 'Express'];

function App() {
  return (
    <main className="app">
      <header className="page-header">
        <p>React Practice</p>
        <h1>Day 13 useRef Search Tasks</h1>
      </header>

      <section className="info-card">
        <h2>useRef, Focus, Ref Values and useImperativeHandle</h2>
        <p>
          Each search box uses <strong>useRef</strong> to control focus, read the input value, and clear the field.
          The reusable input exposes these actions with <strong>useImperativeHandle</strong>.
        </p>
      </section>

      <section className="task-grid">
        <SearchTask
          number="1"
          title="Student Search"
          searchBy="Student Name"
          example="Sud"
          items={studentNames}
        />
        <SearchTask
          number="2"
          title="Product Search"
          searchBy="Product Name"
          example="lap"
          items={productNames}
        />
        <SearchTask
          number="3"
          title="Employee Search"
          searchBy="Employee Name"
          example="ra"
          items={employeeNames}
        />
        <SearchTask
          number="4"
          title="Course Search"
          searchBy="Course Name"
          example="re"
          items={courseNames}
        />
      </section>
    </main>
  );
}

export default App;
