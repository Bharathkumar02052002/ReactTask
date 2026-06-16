import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="task-bar" aria-label="Main navigation">
            <span className="task-bar-title">SLA Academy</span>

            <div className="task-bar-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/day3">DAY3</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
