// src/utils/calculateTotal.js

/**
 * Calculates the total price for the items in the cart.
 * @param {Array} cartItems - An array of cart items.
 * @returns {number} The total price of the items in the cart.
 */
export const calculateTotal = (cartItems) => {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
};
