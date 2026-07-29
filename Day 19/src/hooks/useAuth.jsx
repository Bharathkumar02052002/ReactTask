import useLocalStorage from './useLocalStorage.jsx';

function useAuth() {
  const [registeredUser, setRegisteredUser] = useLocalStorage('day19RegisteredUser', null);
  const [loggedInUser, setLoggedInUser] = useLocalStorage('day19LoggedInUser', null);

  const register = (userData) => {
    setRegisteredUser(userData);
    return true;
  };

  const login = (email, password) => {
    if (!registeredUser) {
      return { success: false, message: 'Please register first' };
    }

    if (registeredUser.email === email && registeredUser.password === password) {
      setLoggedInUser(registeredUser);
      return { success: true };
    }

    return { success: false, message: 'Invalid email or password' };
  };

  const logout = () => {
    setLoggedInUser(null);
  };

  return {
    registeredUser,
    loggedInUser,
    isAuthenticated: Boolean(loggedInUser),
    register,
    login,
    logout,
  };
}

export default useAuth;
