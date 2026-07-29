import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm.jsx';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function Register({ onRegister }) {
  const navigate = useNavigate();
  const { values, errors, setErrors, handleChange, resetForm } = useForm(initialValues);

  const validate = () => {
    const nextErrors = {};

    if (!values.name.trim()) nextErrors.name = 'Name is required';
    if (!values.email.trim()) nextErrors.email = 'Email is required';
    if (!values.password) nextErrors.password = 'Password is required';
    if (values.password && values.password.length < 6) nextErrors.password = 'Password must be at least 6 characters';
    if (values.confirmPassword !== values.password) nextErrors.confirmPassword = 'Passwords do not match';

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onRegister({ name: values.name, email: values.email, password: values.password });
    resetForm();
    navigate('/login');
  };

  return (
    <section className="form-card">
      <span>Custom Hook: useForm + useAuth</span>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" value={values.name} onChange={handleChange} placeholder="Enter name" />
          {errors.name && <small>{errors.name}</small>}
        </label>
        <label>
          Email
          <input type="email" name="email" value={values.email} onChange={handleChange} placeholder="Enter email" />
          {errors.email && <small>{errors.email}</small>}
        </label>
        <label>
          Password
          <input type="password" name="password" value={values.password} onChange={handleChange} placeholder="Enter password" />
          {errors.password && <small>{errors.password}</small>}
        </label>
        <label>
          Confirm Password
          <input type="password" name="confirmPassword" value={values.confirmPassword} onChange={handleChange} placeholder="Confirm password" />
          {errors.confirmPassword && <small>{errors.confirmPassword}</small>}
        </label>
        <button type="submit">Register</button>
      </form>
    </section>
  );
}

export default Register;
