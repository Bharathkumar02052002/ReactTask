import { useEffect, useState } from 'react';

const apiUrl = import.meta.env.VITE_API_URL;

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError('');

        const response = await fetch(apiUrl, { signal: controller.signal });

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        setProducts(data.products || []);
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    return () => controller.abort();
  }, []);

  return (
    <section className="page-card">
      <span>Lazy Page 2</span>
      <h2>Products Page</h2>
      <p className="api-box">API from .env: {apiUrl}</p>
      {loading && <p className="state-box">Fetching products...</p>}
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

export default Products;
