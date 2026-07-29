import { useAppContext } from '../context/AppContext.jsx';

function CartNavbar() {
  const { cartCount } = useAppContext();

  return <nav className="cart-navbar">Cart ({cartCount})</nav>;
}

function CartPage() {
  const { cart } = useAppContext();

  return (
    <div className="cart-page">
      {cart.map((item) => (
        <p key={item.id}>{item.product} x {item.qty}</p>
      ))}
    </div>
  );
}

function Cart() {
  return (
    <section className="task-card">
      <span>Task 5</span>
      <h2>Shopping Cart Rendering</h2>
      <CartNavbar />
      <CartPage />
    </section>
  );
}

export default Cart;
