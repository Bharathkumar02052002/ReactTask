function Home() {
  return (
    <section className="page-card">
      <span>Lazy Page 1</span>
      <h2>Home Page</h2>
      <p>
        This Home page is loaded using React.lazy(). The component code is downloaded only when this page is selected.
      </p>
      <div className="feature-grid">
        <article>React Lazy Loading</article>
        <article>Suspense Fallback</article>
        <article>ENV API Usage</article>
      </div>
    </section>
  );
}

export default Home;
