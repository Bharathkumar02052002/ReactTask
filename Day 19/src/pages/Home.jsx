function Home({ user }) {
  return (
    <section className="home-card">
      <span>Protected Route</span>
      <h1>Home Dashboard</h1>
      <p className="success-text">Login successful. Welcome, {user.name}.</p>
      <div className="dashboard-grid">
        <article>
          <strong>Name</strong>
          <p>{user.name}</p>
        </article>
        <article>
          <strong>Email</strong>
          <p>{user.email}</p>
        </article>
        <article>
          <strong>Route</strong>
          <p>Protected Home</p>
        </article>
      </div>
    </section>
  );
}

export default Home;
