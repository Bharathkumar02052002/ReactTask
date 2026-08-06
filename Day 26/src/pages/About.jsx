function About() {
  return (
    <section className="page-card">
      <span>Lazy Page 3</span>
      <h2>About Page</h2>
      <p>
        React.lazy() helps split the application bundle. Suspense shows fallback UI while the selected lazy component is loading.
      </p>
      <div className="note-box">
        <p>ENV variable used: <strong>VITE_API_URL</strong></p>
        <p>Lazy pages used: <strong>Home, Products, About</strong></p>
        <p>Fallback used: <strong>Suspense Loader</strong></p>
      </div>
    </section>
  );
}

export default About;
