import useToggle from '../hooks/useToggle.jsx';

function LoginToggleDemo() {
  const { value: showPassword, toggle } = useToggle(false);

  return (
    <section className="task-card">
      <span>Task 2</span>
      <h2>useToggle Password Show/Hide</h2>
      <form>
        <label>
          Email
          <input type="email" placeholder="Enter email" />
        </label>
        <label>
          Password
          <input type={showPassword ? 'text' : 'password'} placeholder="Enter password" />
        </label>
        <button type="button" onClick={toggle}>
          {showPassword ? 'Hide Password' : 'Show Password'}
        </button>
      </form>
    </section>
  );
}

export default LoginToggleDemo;
