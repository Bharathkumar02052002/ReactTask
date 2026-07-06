import { useEffect, useState } from 'react';

const registerInitialState = {
  name: '',
  email: '',
  mobile: '',
  password: '',
  confirmPassword: '',
};

const loginInitialState = {
  email: '',
  password: '',
};

const storageKey = 'day11RegisteredUser';

function App() {
  const [screen, setScreen] = useState('register');
  const [registeredUser, setRegisteredUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem(storageKey);

    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setRegisteredUser(parsedUser);
      setScreen('login');
    }
  }, []);

  const handleRegister = (user) => {
    localStorage.setItem(storageKey, JSON.stringify(user));
    setRegisteredUser(user);
    setScreen('login');
  };

  const handleLogin = (user) => {
    setLoggedInUser(user);
    setScreen('dashboard');
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setScreen('login');
  };

  const handleClearStorage = () => {
    localStorage.removeItem(storageKey);
    setRegisteredUser(null);
    setLoggedInUser(null);
    setScreen('register');
  };

  return (
    <main className="app">
      <header className="page-header">
        <p>React Practice</p>
        <h1>Day 11 Form Handling</h1>
      </header>

      <section className="shell">
        <nav className="tabs">
          <button className={screen === 'register' ? 'active' : ''} onClick={() => setScreen('register')}>
            Register
          </button>
          <button className={screen === 'login' ? 'active' : ''} onClick={() => setScreen('login')}>
            Login
          </button>
          <button className={screen === 'dashboard' ? 'active' : ''} disabled={!loggedInUser} onClick={() => setScreen('dashboard')}>
            Dashboard
          </button>
        </nav>

        {screen === 'register' && <RegisterForm onRegister={handleRegister} />}
        {screen === 'login' && (
          <LoginForm registeredUser={registeredUser} onLogin={handleLogin} onGoRegister={() => setScreen('register')} />
        )}
        {screen === 'dashboard' && loggedInUser && (
          <Dashboard user={loggedInUser} onLogout={handleLogout} onClearStorage={handleClearStorage} />
        )}
      </section>
    </main>
  );
}

function RegisterForm({ onRegister }) {
  const [formData, setFormData] = useState(registerInitialState);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = 'Name is required';
    if (!formData.email.trim()) nextErrors.email = 'Email is required';
    if (!formData.mobile.trim()) nextErrors.mobile = 'Mobile number is required';
    if (!formData.password) nextErrors.password = 'Password is required';
    if (formData.password.length > 0 && formData.password.length < 6) {
      nextErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.confirmPassword !== formData.password) {
      nextErrors.confirmPassword = 'Passwords do not match';
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onRegister({
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      password: formData.password,
    });

    setFormData(registerInitialState);
    setErrors({});
  };

  return (
    <section className="card">
      <h2>Register Using localStorage</h2>
      <form onSubmit={handleSubmit}>
        <FormInput label="Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} />
        <FormInput label="Email" type="email" name="email" value={formData.email} onChange={handleChange} error={errors.email} />
        <FormInput label="Mobile" name="mobile" value={formData.mobile} onChange={handleChange} error={errors.mobile} />
        <FormInput label="Password" type="password" name="password" value={formData.password} onChange={handleChange} error={errors.password} />
        <FormInput label="Confirm Password" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} error={errors.confirmPassword} />
        <button type="submit">Register</button>
      </form>
    </section>
  );
}

function LoginForm({ registeredUser, onLogin, onGoRegister }) {
  const [formData, setFormData] = useState(loginInitialState);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '', form: '' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};

    if (!formData.email.trim()) nextErrors.email = 'Email is required';
    if (!formData.password) nextErrors.password = 'Password is required';

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    if (!registeredUser) {
      setErrors({ form: 'No registered user found. Please register first.' });
      return;
    }

    if (formData.email === registeredUser.email && formData.password === registeredUser.password) {
      onLogin(registeredUser);
      setFormData(loginInitialState);
      setErrors({});
      return;
    }

    setErrors({ form: 'Invalid email or password' });
  };

  return (
    <section className="card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {errors.form && <p className="form-error">{errors.form}</p>}
        <FormInput label="Email" type="email" name="email" value={formData.email} onChange={handleChange} error={errors.email} />
        <FormInput label="Password" type="password" name="password" value={formData.password} onChange={handleChange} error={errors.password} />
        <button type="submit">Login</button>
      </form>
      <p className="switch-text">
        New user? <button className="link-button" onClick={onGoRegister}>Create account</button>
      </p>
    </section>
  );
}

function Dashboard({ user, onLogout, onClearStorage }) {
  return (
    <section className="card dashboard-card">
      <div>
        <h2>Dashboard</h2>
        <p className="success-text">Login successful. Welcome, {user.name}.</p>
      </div>

      <div className="profile-grid">
        <p><span>Name</span><strong>{user.name}</strong></p>
        <p><span>Email</span><strong>{user.email}</strong></p>
        <p><span>Mobile</span><strong>{user.mobile}</strong></p>
      </div>

      <div className="button-row">
        <button onClick={onLogout}>Logout</button>
        <button className="danger" onClick={onClearStorage}>Clear localStorage</button>
      </div>
    </section>
  );
}

function FormInput({ label, error, type = 'text', ...props }) {
  return (
    <label>
      {label}
      <input type={type} {...props} />
      {error && <span className="error-text">{error}</span>}
    </label>
  );
}

export default App;
