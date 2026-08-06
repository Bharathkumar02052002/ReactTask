import { useMemo, useRef, useState } from 'react';

const cartItems = [
  { id: 1, product: 'Laptop', price: 50000, quantity: 1 },
  { id: 2, product: 'Mouse', price: 800, quantity: 2 },
  { id: 3, product: 'Keyboard', price: 1500, quantity: 1 },
];

function ShoppingCartTotal() {
  const [darkTheme, setDarkTheme] = useState(false);
  const calculationCount = useRef(0);

  const grandTotal = useMemo(() => {
    calculationCount.current += 1;
    console.log('Cart total calculation running');

    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, []);

  return (
    <section className={darkTheme ? 'task-card dark-card' : 'task-card'}>
      <span>Task 2</span>
      <h2>Shopping Cart Total Calculator</h2>
      <button onClick={() => setDarkTheme(!darkTheme)}>Theme Change</button>
      <p>Total calculation count: <strong>{calculationCount.current}</strong></p>
      <div className="list-box">
        {cartItems.map((item) => (
          <p key={item.id}>{item.product}: Rs. {item.price} x {item.quantity}</p>
        ))}
      </div>
      <p className="total-box">Grand Total: Rs. {grandTotal}</p>
    </section>
  );
}

export default ShoppingCartTotal;
