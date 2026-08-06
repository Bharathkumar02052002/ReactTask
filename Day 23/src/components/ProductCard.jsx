import { memo } from 'react';

const ProductCard = memo(function ProductCard({ product, onAddToCart }) {
  console.log('ProductCard rendered:', product.title);

  return (
    <article className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <div className="product-body">
        <span>{product.category}</span>
        <h2>{product.title}</h2>
        <p>{product.brand}</p>
        <div className="meta-row">
          <strong>Rs. {product.price}</strong>
          <strong>{product.rating} Rating</strong>
        </div>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </article>
  );
});

export default ProductCard;
