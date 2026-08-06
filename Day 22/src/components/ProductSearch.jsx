import { useMemo, useRef, useState } from 'react';

const products = [
  { id: 1, name: 'Laptop', category: 'Electronics' },
  { id: 2, name: 'Mobile', category: 'Electronics' },
  { id: 3, name: 'Laptop Stand', category: 'Accessories' },
  { id: 4, name: 'Keyboard', category: 'Accessories' },
  { id: 5, name: 'Mouse', category: 'Accessories' },
];

function ProductSearch() {
  const [searchText, setSearchText] = useState('');
  const [darkTheme, setDarkTheme] = useState(false);
  const calculationCount = useRef(0);

  const filteredProducts = useMemo(() => {
    calculationCount.current += 1;
    console.log('Product filter calculation running');

    return products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText]);

  return (
    <section className={darkTheme ? 'task-card dark-card' : 'task-card'}>
      <span>Task 1</span>
      <h2>Product Search System</h2>
      <input value={searchText} onChange={(event) => setSearchText(event.target.value)} placeholder="Search product" />
      <button onClick={() => setDarkTheme(!darkTheme)}>Theme Change</button>
      <p>Filter calculation count: <strong>{calculationCount.current}</strong></p>
      <div className="list-box">
        {filteredProducts.map((product) => (
          <p key={product.id}>{product.name} - {product.category}</p>
        ))}
      </div>
    </section>
  );
}

export default ProductSearch;
