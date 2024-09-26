// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import ShoppingCart from "./components/ShoppingCart";
import AdminUpload from "./pages/AdminUpload"; // Import your Admin Upload page
import PrivateRoute from "./components/PrivateRoute"; // Import the PrivateRoute
import "font-awesome/css/font-awesome.min.css";

// The App component sets up routing and renders the Navbar and page components
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route
          path="/admin/upload"
          element={<PrivateRoute component={AdminUpload} />}
        />{" "}
        {/* Protect the upload route */}
      </Routes>
    </Router>
  );
};

export default App;
