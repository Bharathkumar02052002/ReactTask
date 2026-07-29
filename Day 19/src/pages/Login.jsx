import { Link, useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm.jsx';

const initialValues = {
  email: '',
  password: '',
};

function Login({ onLogin }) {
  const navigate = useNavigate();
  const { values, errors, setErrors, handleChange, resetForm } = useForm(initialValues);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!values.email.trim() || !values.password) {
      setErrors({ form: 'Email and password are required' });
      return;
    }

    const result = onLogin(values.email, values.password);

    if (!result.success) {
      setErrors({ form: result.message });
      return;
    }

    resetForm();
    navigate('/home');
  };

  return (
    <section className="form-card">
      <span>Protected Routes Login</span>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        {errors.form && <p className="form-error">{errors.form}</p>}
        <label>
          Email
          <input type="email" name="email" value={values.email} onChange={handleChange} placeholder="Enter email" />
        </label>
        <label>
          Password
          <input type="password" name="password" value={values.password} onChange={handleChange} placeholder="Enter password" />
        </label>
        <button type="submit">Login and Move to Home</button>
      </form>
      <p className="switch-text">No account? <Link to="/register">Register here</Link></p>
    </section>
  );
}

export default Login;
