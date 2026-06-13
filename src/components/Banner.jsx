import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();

    return (
        <div className="banner">
            <h1>Welcome to SLA Academy</h1>
            <p>Learn React JS and build modern web applications.</p>

            <div className="banner-buttons">
                <button type="button" onClick={() => navigate("/login")}>
                    Login
                </button>

                <button type="button" onClick={() => navigate("/register")}>
                    Register
                </button>
            </div>
        </div>
    );
};

export default Banner;
