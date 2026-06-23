import { useState } from 'react';

function StudentNameInput() {
  const [studentName, setStudentName] = useState('');

  return (
    <TaskCard number="1" title="Student Name Input">
      <input value={studentName} onChange={(event) => setStudentName(event.target.value)} placeholder="Enter student name" />
      <p>Student Name: <strong>{studentName}</strong></p>
    </TaskCard>
  );
}

function EmployeeNameForm() {
  const [employeeName, setEmployeeName] = useState('');

  return (
    <TaskCard number="2" title="Employee Name Form">
      <input value={employeeName} onChange={(event) => setEmployeeName(event.target.value)} placeholder="Enter employee name" />
      <p>Employee Name: <strong>{employeeName}</strong></p>
    </TaskCard>
  );
}

function AgeInput() {
  const [age, setAge] = useState('');

  return (
    <TaskCard number="3" title="Age Input">
      <input type="number" value={age} onChange={(event) => setAge(event.target.value)} placeholder="Enter age" />
      <p>Age: <strong>{age}</strong></p>
    </TaskCard>
  );
}

function EmailForm() {
  const [email, setEmail] = useState('');

  return (
    <TaskCard number="4" title="Email Form">
      <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter email" />
      <p>Email: <strong>{email}</strong></p>
    </TaskCard>
  );
}

function MobileNumberForm() {
  const [mobile, setMobile] = useState('');

  return (
    <TaskCard number="5" title="Mobile Number Form">
      <input value={mobile} onChange={(event) => setMobile(event.target.value)} placeholder="Enter mobile number" />
      <p>Mobile Number: <strong>{mobile}</strong></p>
    </TaskCard>
  );
}

function CitySelection() {
  const [city, setCity] = useState('');

  return (
    <TaskCard number="6" title="City Selection">
      <input value={city} onChange={(event) => setCity(event.target.value)} placeholder="Enter city" />
      <p>City: <strong>{city}</strong></p>
    </TaskCard>
  );
}

function CourseRegistration() {
  const [course, setCourse] = useState('');

  return (
    <TaskCard number="7" title="Course Registration">
      <input value={course} onChange={(event) => setCourse(event.target.value)} placeholder="Enter course name" />
      <p>Selected Course: <strong>{course}</strong></p>
    </TaskCard>
  );
}

function LiveCharacterCounter() {
  const [text, setText] = useState('');

  return (
    <TaskCard number="8" title="Live Character Counter">
      <input value={text} onChange={(event) => setText(event.target.value)} placeholder="Type something" />
      <p>Characters Typed: <strong>{text.length}</strong></p>
    </TaskCard>
  );
}

function UppercaseConverter() {
  const [text, setText] = useState('');

  return (
    <TaskCard number="9" title="Uppercase Converter">
      <input value={text} onChange={(event) => setText(event.target.value)} placeholder="Enter text" />
      <p>Uppercase: <strong>{text.toUpperCase()}</strong></p>
    </TaskCard>
  );
}

function LowercaseConverter() {
  const [text, setText] = useState('');

  return (
    <TaskCard number="10" title="Lowercase Converter">
      <input value={text} onChange={(event) => setText(event.target.value)} placeholder="Enter text" />
      <p>Lowercase: <strong>{text.toLowerCase()}</strong></p>
    </TaskCard>
  );
}

function FullNameForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <TaskCard number="11" title="Full Name Form">
      <input value={firstName} onChange={(event) => setFirstName(event.target.value)} placeholder="First name" />
      <input value={lastName} onChange={(event) => setLastName(event.target.value)} placeholder="Last name" />
      <p>Full Name: <strong>{`${firstName} ${lastName}`.trim()}</strong></p>
    </TaskCard>
  );
}

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginData, setLoginData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoginData({ username, password });
  };

  return (
    <TaskCard number="12" title="Login Form">
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
      {loginData && (
        <div className="result-box">
          <p>Username: <strong>{loginData.username}</strong></p>
          <p>Password: <strong>{loginData.password}</strong></p>
        </div>
      )}
    </TaskCard>
  );
}

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');

  return (
    <TaskCard number="13" title="Feedback Form">
      <textarea value={feedback} onChange={(event) => setFeedback(event.target.value)} placeholder="Enter feedback" rows="4" />
      <p>Feedback: <strong>{feedback}</strong></p>
    </TaskCard>
  );
}

function SearchBox() {
  const [searchText, setSearchText] = useState('');

  return (
    <TaskCard number="14" title="Search Box">
      <input value={searchText} onChange={(event) => setSearchText(event.target.value)} placeholder="Search here" />
      <p>Current Search Text: <strong>{searchText}</strong></p>
    </TaskCard>
  );
}

function StudentRegistrationForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [city, setCity] = useState('');

  return (
    <TaskCard number="15" title="Student Registration Form">
      <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" />
      <input type="number" value={age} onChange={(event) => setAge(event.target.value)} placeholder="Age" />
      <input value={course} onChange={(event) => setCourse(event.target.value)} placeholder="Course" />
      <input value={city} onChange={(event) => setCity(event.target.value)} placeholder="City" />
      <div className="result-box">
        <p>Name: <strong>{name}</strong></p>
        <p>Age: <strong>{age}</strong></p>
        <p>Course: <strong>{course}</strong></p>
        <p>City: <strong>{city}</strong></p>
      </div>
    </TaskCard>
  );
}

function UserListCreator() {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);

  const addUser = () => {
    if (username.trim() === '') return;
    setUsers([...users, username]);
    setUsername('');
  };

  return (
    <TaskCard number="16" title="User List Creator">
      <div className="inline-form">
        <input value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Enter username" />
        <button onClick={addUser}>Add User</button>
      </div>
      <List items={users} emptyText="No users added yet" />
    </TaskCard>
  );
}

function ProductListCreator() {
  const [productName, setProductName] = useState('');
  const [products, setProducts] = useState([]);

  const addProduct = () => {
    if (productName.trim() === '') return;
    setProducts([...products, productName]);
    setProductName('');
  };

  return (
    <TaskCard number="17" title="Product List Creator">
      <div className="inline-form">
        <input value={productName} onChange={(event) => setProductName(event.target.value)} placeholder="Enter product name" />
        <button onClick={addProduct}>Add Product</button>
      </div>
      <List items={products} emptyText="No products added yet" />
    </TaskCard>
  );
}

function EmployeeListCreator() {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeRole, setEmployeeRole] = useState('');
  const [employees, setEmployees] = useState([]);

  const addEmployee = (event) => {
    event.preventDefault();
    if (employeeName.trim() === '' || employeeRole.trim() === '') return;
    setEmployees([...employees, { id: Date.now(), name: employeeName, role: employeeRole }]);
    setEmployeeName('');
    setEmployeeRole('');
  };

  return (
    <TaskCard number="18" title="Employee List Creator">
      <form onSubmit={addEmployee}>
        <input value={employeeName} onChange={(event) => setEmployeeName(event.target.value)} placeholder="Employee name" />
        <input value={employeeRole} onChange={(event) => setEmployeeRole(event.target.value)} placeholder="Employee role" />
        <button type="submit">Add Employee</button>
      </form>
      {employees.length === 0 ? (
        <p className="empty-text">No employees added yet</p>
      ) : (
        <ul>
          {employees.map((employee) => (
            <li key={employee.id}>{employee.name} - {employee.role}</li>
          ))}
        </ul>
      )}
    </TaskCard>
  );
}

function TodoApplication() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, task]);
    setTask('');
  };

  return (
    <TaskCard number="19" title="Todo Application">
      <div className="inline-form">
        <input value={task} onChange={(event) => setTask(event.target.value)} placeholder="Enter task" />
        <button onClick={addTask}>Add Task</button>
      </div>
      <List items={tasks} emptyText="No tasks added yet" />
    </TaskCard>
  );
}

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [contactData, setContactData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setContactData({ name, email, mobile, message });
  };

  return (
    <TaskCard number="20" title="Contact Form" wide>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" />
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
        <input value={mobile} onChange={(event) => setMobile(event.target.value)} placeholder="Mobile" />
        <textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Message" rows="4" />
        <button type="submit">Submit Contact</button>
      </form>
      {contactData && (
        <div className="result-box">
          <p>Name: <strong>{contactData.name}</strong></p>
          <p>Email: <strong>{contactData.email}</strong></p>
          <p>Mobile: <strong>{contactData.mobile}</strong></p>
          <p>Message: <strong>{contactData.message}</strong></p>
        </div>
      )}
    </TaskCard>
  );
}

function TaskCard({ number, title, children, wide = false }) {
  return (
    <article className={wide ? 'task-card wide-card' : 'task-card'}>
      <span className="task-number">Task {number}</span>
      <h2>{title}</h2>
      {children}
    </article>
  );
}

function List({ items, emptyText }) {
  if (items.length === 0) {
    return <p className="empty-text">{emptyText}</p>;
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={`${item}-${index}`}>{item}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <main className="app">
      <header className="page-header">
        <p>React Practice</p>
        <h1>Day 7 Input and Form Tasks</h1>
      </header>

      <section className="task-grid">
        <StudentNameInput />
        <EmployeeNameForm />
        <AgeInput />
        <EmailForm />
        <MobileNumberForm />
        <CitySelection />
        <CourseRegistration />
        <LiveCharacterCounter />
        <UppercaseConverter />
        <LowercaseConverter />
        <FullNameForm />
        <LoginForm />
        <FeedbackForm />
        <SearchBox />
        <StudentRegistrationForm />
        <UserListCreator />
        <ProductListCreator />
        <EmployeeListCreator />
        <TodoApplication />
        <ContactForm />
      </section>
    </main>
  );
}

export default App;
