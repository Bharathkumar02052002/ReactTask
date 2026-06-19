import { useState } from 'react';

function ProductDetails() {
  const [product, setProduct] = useState(undefined);

  return (
    <article className="task-card">
      <span className="task-number">Task 8</span>
      <h2>Product Details</h2>
      <button
        onClick={() =>
          setProduct({ name: 'Laptop', brand: 'Dell', price: 55000 })
        }
      >
        Load Product
      </button>
      {product && (
        <div className="details-box">
          <p>Product: <strong>{product.name}</strong></p>
          <p>Brand: <strong>{product.brand}</strong></p>
          <p>Price: <strong>Rs. {product.price}</strong></p>
        </div>
      )}
    </article>
  );
}

export default ProductDetails;
