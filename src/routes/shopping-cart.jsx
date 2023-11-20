import React from "react";
import { useCart } from "../hooks/use-cart";
import './shopping-cart.css'
import { Link } from "react-router-dom";

export default function ShoppingCart() {
  const { items, onRemove  } = useCart();

  const handleRemoveItem = (itemId) => {
    onRemove (itemId);
  };

  const calculateTotalPrice = () => {
    return items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0).toFixed(2);
  };

  if (items.length === 0) {
    return (
      <main>
        <h1>Shopping Cart is empty</h1>
      </main>
    );
  }

  return (
    <main>
      <h1>Shopping Cart</h1>
      <div className="shopping-cart">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-img">
            <img src={item.thumbnail} alt={item.title} />
            </div>
            <div className="cart-item-info">
              <h3>{item.title}</h3>
              <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </div>
        ))}
        <div className="total-price">
          <h2>Total Price: ${calculateTotalPrice()}</h2>
          <button className="pay"><Link className="link-checkout" to={"/checkout"}>payment</Link></button>
        </div>
      </div>
    </main>
  );
}
