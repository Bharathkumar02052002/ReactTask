import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <section className="home-card">
      <span>Day 19 Assignment</span>
      <h1>Login Register With Protected Routes</h1>
      <p>Custom hooks share the form, localStorage and authentication logic across the app.</p>
      <div className="button-row">
        <Link className="button-link" to="/register">Register</Link>
        <Link className="button-link secondary-link" to="/login">Login</Link>
      </div>
    </section>
  );
}

export default Welcome;
