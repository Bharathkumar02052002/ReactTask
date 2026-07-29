import useFetch from '../hooks/useFetch.jsx';

function ProductsFetchDemo() {
  const { data, loading, error } = useFetch('https://dummyjson.com/products?limit=8');
  const products = data?.products || [];

  return (
    <section className="task-card wide-card">
      <span>Task 3</span>
      <h2>useFetch Product Cards</h2>
      {loading && <p className="state-box">Loading products...</p>}
      {error && <p className="error-box">{error}</p>}
      {!loading && !error && (
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <h3>{product.title}</h3>
                <p>{product.brand}</p>
                <strong>Rs. {product.price}</strong>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductsFetchDemo;
