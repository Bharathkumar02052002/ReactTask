import { useEffect, useMemo, useState } from 'react';

const apiUrl = 'https://dummyjson.com/products?limit=100';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortType, setSortType] = useState('default');

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError('');

        const response = await fetch(apiUrl, { signal: controller.signal });

        if (!response.ok) {
          throw new Error('Unable to fetch products from dummy API');
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

    return () => {
      controller.abort();
    };
  }, []);

  const categories = useMemo(() => {
    return [...new Set(products.map((product) => product.category))].sort();
  }, [products]);

  const filteredProducts = useMemo(() => {
    const query = searchText.trim().toLowerCase();

    const filtered = products.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    return [...filtered].sort((first, second) => {
      if (sortType === 'price-low-high') return first.price - second.price;
      if (sortType === 'price-high-low') return second.price - first.price;
      if (sortType === 'rating-high-low') return second.rating - first.rating;
      if (sortType === 'title-a-z') return first.title.localeCompare(second.title);
      return first.id - second.id;
    });
  }, [products, searchText, selectedCategory, sortType]);

  const resetFilters = () => {
    setSearchText('');
    setSelectedCategory('all');
    setSortType('default');
  };

  return (
    <main className="app">
      <header className="page-header">
        <p>React Practice</p>
        <h1>Day 15 useEffect Filter and Fetch</h1>
      </header>

      <section className="toolbar">
        <label>
          Search Product
          <input
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="Search by title, brand, or category"
          />
        </label>

        <label>
          Category
          <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </label>

        <label>
          Sorting
          <select value={sortType} onChange={(event) => setSortType(event.target.value)}>
            <option value="default">Default</option>
            <option value="price-low-high">Price Low to High</option>
            <option value="price-high-low">Price High to Low</option>
            <option value="rating-high-low">Rating High to Low</option>
            <option value="title-a-z">Title A to Z</option>
          </select>
        </label>

        <button onClick={resetFilters}>Reset</button>
      </section>

      <section className="summary-row">
        <p>Total API Products: <strong>{products.length}</strong></p>
        <p>Showing Results: <strong>{filteredProducts.length}</strong></p>
        <p>API: <strong>dummyjson.com/products</strong></p>
      </section>

      {loading && <p className="state-box">Loading products...</p>}
      {error && <p className="error-box">{error}</p>}

      {!loading && !error && (
        <section className="product-grid">
          {filteredProducts.length === 0 ? (
            <p className="state-box wide-message">No products found</p>
          ) : (
            filteredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div className="product-body">
                  <span>{product.category}</span>
                  <h2>{product.title}</h2>
                  <p>{product.brand}</p>
                  <div className="meta-row">
                    <strong>Rs. {product.price}</strong>
                    <strong>{product.rating} Rating</strong>
                  </div>
                </div>
              </article>
            ))
          )}
        </section>
      )}
    </main>
  );
}

export default App;
