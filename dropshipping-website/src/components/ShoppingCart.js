// src/components/ShoppingCart.js

import React, { useState } from "react";
import "./ShoppingCart.css";
import { calculateTotal } from "../utils/calculateTotal";

/**
 * The ShoppingCart component manages and displays the user's cart items.
 */
const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const totalAmount = calculateTotal(cartItems);

  return (
    <div className="shopping-cart">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))}
          <h2>Total: ${totalAmount}</h2>
          <button>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
