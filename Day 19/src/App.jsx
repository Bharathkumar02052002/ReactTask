import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import useAuth from './hooks/useAuth.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Welcome from './pages/Welcome.jsx';

function App() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/login');
  };

  return (
    <main className="app">
      <Navbar isAuthenticated={auth.isAuthenticated} onLogout={handleLogout} />
      <div className="page-wrap">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Register onRegister={auth.register} />} />
          <Route path="/login" element={<Login onLogin={auth.login} />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute isAuthenticated={auth.isAuthenticated}>
                <Home user={auth.loggedInUser} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
