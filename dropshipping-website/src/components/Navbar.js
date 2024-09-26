// src/components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Add styles for your navbar here

/**
 * The Navbar component provides navigation links to different parts of the website.
 */
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/products" className="nav-link">
        Products
      </Link>
      <Link to="/cart" className="nav-link">
        Cart
      </Link>
      <Link to="/checkout" className="nav-link">
        Checkout
      </Link>
    </nav>
  );
};

export default Navbar;
