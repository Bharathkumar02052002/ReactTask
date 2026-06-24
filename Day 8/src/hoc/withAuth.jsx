function withAuth(WrappedComponent) {
  return function AuthComponent({ isLogin, ...props }) {
    if (!isLogin) {
      return <p className="login-warning">Please Login First</p>;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;
