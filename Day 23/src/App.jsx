import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import CartSummary from './components/CartSummary.jsx';
import ProductCard from './components/ProductCard.jsx';
import SearchControls from './components/SearchControls.jsx';

const apiUrl = 'https://dummyjson.com/products?limit=30';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [sortType, setSortType] = useState('default');
  const [darkTheme, setDarkTheme] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const filterRunCount = useRef(0);
  const cartTotalRunCount = useRef(0);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError('');

        const response = await fetch(apiUrl, { signal: controller.signal });

        if (!response.ok) {
          throw new Error('Unable to fetch products');
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

  const filteredProducts = useMemo(() => {
    filterRunCount.current += 1;
    console.log('useMemo product search/filter running');

    const query = searchText.trim().toLowerCase();

    const searchedProducts = products.filter((product) => {
      return (
        product.title.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    });

    return [...searchedProducts].sort((first, second) => {
      if (sortType === 'price-low-high') return first.price - second.price;
      if (sortType === 'price-high-low') return second.price - first.price;
      if (sortType === 'rating-high-low') return second.rating - first.rating;
      if (sortType === 'title-a-z') return first.title.localeCompare(second.title);
      return first.id - second.id;
    });
  }, [products, searchText, sortType]);

  const totalCartItems = useMemo(() => {
    cartTotalRunCount.current += 1;
    console.log('useMemo cart total running');

    return cartItems.reduce((total, item) => total + item.qty, 0);
  }, [cartItems]);

  const handleSearchChange = useCallback((value) => {
    setSearchText(value);
  }, []);

  const handleSortChange = useCallback((value) => {
    setSortType(value);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchText('');
    setSortType('default');
  }, []);

  const addToCart = useCallback((product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...currentItems, { id: product.id, title: product.title, price: product.price, qty: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const toggleTheme = useCallback(() => {
    setDarkTheme((currentTheme) => !currentTheme);
  }, []);

  return (
    <main className={darkTheme ? 'app dark-app' : 'app'}>
      <header className="page-header">
        <div>
          <p>React Practice</p>
          <h1>Day 23 useCallback Full Project</h1>
        </div>
        <button onClick={toggleTheme}>{darkTheme ? 'Light Theme' : 'Dark Theme'}</button>
      </header>

      <section className="info-card">
        <h2>useMemo and useCallback</h2>
        <p>
          useMemo handles fetched data search and sorting. useCallback keeps handler functions stable so memoized child components avoid unnecessary re-renders.
        </p>
        <div className="debug-grid">
          <span>Filter useMemo runs: <strong>{filterRunCount.current}</strong></span>
          <span>Cart total useMemo runs: <strong>{cartTotalRunCount.current}</strong></span>
        </div>
      </section>

      <SearchControls
        searchText={searchText}
        sortType={sortType}
        onSearchChange={handleSearchChange}
        onSortChange={handleSortChange}
        onClearSearch={clearSearch}
      />

      {loading && <p className="state-box">Loading products...</p>}
      {error && <p className="error-box">{error}</p>}

      {!loading && !error && (
        <section className="layout">
          <div className="products-area">
            <div className="result-header">
              <h2>Products</h2>
              <strong>{filteredProducts.length} Results</strong>
            </div>
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
              ))}
            </div>
          </div>

          <CartSummary
            cartItems={cartItems}
            totalItems={totalCartItems}
            onRemoveFromCart={removeFromCart}
            onClearCart={clearCart}
          />
        </section>
      )}
    </main>
  );
}

export default App;
