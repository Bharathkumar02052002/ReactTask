import { Link, NavLink } from 'react-router-dom';

function Navbar({ isAuthenticated, onLogout }) {
  return (
    <nav className="navbar">
      <Link className="brand" to="/">Day 19</Link>
      <div>
        {isAuthenticated && <NavLink to="/home">Home</NavLink>}
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        {isAuthenticated && <button onClick={onLogout}>Logout</button>}
      </div>
    </nav>
  );
}

export default Navbar;
