const Header = () => {
    return (
        <header className="site-header">
            <h1>My React Task</h1>

            <nav className="header-nav" aria-label="Main navigation">
                <a href="#">Home</a>
                <a href="#">Tasks</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    );
};

export default Header;
