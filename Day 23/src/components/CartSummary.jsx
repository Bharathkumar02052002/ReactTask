import { memo } from 'react';

const CartSummary = memo(function CartSummary({ cartItems, totalItems, onRemoveFromCart, onClearCart }) {
  console.log('CartSummary rendered');

  return (
    <aside className="cart-card">
      <div className="cart-header">
        <h2>Cart</h2>
        <strong>{totalItems} Items</strong>
      </div>

      {cartItems.length === 0 ? (
        <p className="empty-text">No products added yet</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item) => (
            <article key={item.id}>
              <div>
                <strong>{item.title}</strong>
                <p>Rs. {item.price} x {item.qty}</p>
              </div>
              <button className="danger" onClick={() => onRemoveFromCart(item.id)}>Remove</button>
            </article>
          ))}
        </div>
      )}

      <button className="secondary" onClick={onClearCart}>Clear Cart</button>
    </aside>
  );
});

export default CartSummary;
