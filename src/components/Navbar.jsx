const Navbar = () => {
    return (
        <nav className="task-bar" aria-label="Task navigation">
            <span className="task-bar-title">My React Task</span>
            <div className="task-bar-links">
                <a href="#">Overview</a>
                <a href="#">Components</a>
                <a href="#">About</a>
            </div>
        </nav>
    );
};

export default Navbar;
