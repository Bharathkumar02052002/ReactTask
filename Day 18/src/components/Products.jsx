import { useAppContext } from '../context/AppContext.jsx';

function Products() {
  const { products } = useAppContext();

  return (
    <section className="task-card">
      <span>Task 2</span>
      <h2>Product Cards Rendering</h2>
      <div className="product-list">
        {products.map((product) => (
          <article className="mini-card" key={product.id}>
            <h3>{product.title}</h3>
            <p>Rs. {product.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Products;
